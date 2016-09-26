var gulp = require('gulp-help')(require('gulp'));
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var jsdoc = require('gulp-jsdoc3');
var sequence = require('run-sequence');
var babel = require('gulp-babel');
var babelRegister = require('babel-core/register');
var spawn = require('child_process').spawn;
var path = require('path');

var GULP_FILE = ['gulpfile.js'];
var SRC_FILES = ['src/**/*.js'];
var TEST_FILES = ['test/**/*.js'];
var TEST_CASE_FILES = ['test/**/*.spec.js'];
var COMPILED_SRC_DIR = 'build/source';
var JSDOC_DIR = 'build/jsdoc';

gulp.task('lint', 'Validates code with "eslint"', function (done) {
  gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('finish', done);
});

gulp.task('test', 'Run tests without code coverage', function () {
  return gulp.src(TEST_CASE_FILES)
    .pipe(mocha({ compilers: { js: babelRegister } }));
});

gulp.task('coverage', 'Runs tests and generates code coverage report', function (done) {
  console.log('running code coverage...');

  let file = 'nyc';
  if (process.platform === 'win32') file = 'nyc.cmd';

  let execute = () => {
    return spawn(path.join(__dirname, 'node_modules/.bin/', file), ['node_modules/.bin/mocha'], { stdio: "inherit", cwd: __dirname });
  }

  execute().on('close', (code) => {
    if (code === 1) {
      //run again just in case
      execute().on('close', done);
    } else {
      done(code);
    }
  });
});

gulp.task('compile', 'Compiles source code from es6 to es5', function (done) {
  gulp.src(SRC_FILES)
    .pipe(babel())
    .pipe(gulp.dest(COMPILED_SRC_DIR))
    .on('finish', done);
});

gulp.task('jsdoc', 'Generates jsdoc', ['compile'], function (done) {
  gulp.src(SRC_FILES, { read: false })
    .pipe(jsdoc({
      opts: { destination: JSDOC_DIR }
    }, done));
});

gulp.task('build', 'Builds source code: validates it and provides an artifacts', function (done) {
  sequence('lint', 'coverage', 'compile', 'jsdoc', done);
});

gulp.task('pre-commit', 'Being run automatically on a git pre-commit hook', ['build']);

gulp.task('ci', 'Being run on a CI', ['build']);

gulp.task('default', ['build']);
