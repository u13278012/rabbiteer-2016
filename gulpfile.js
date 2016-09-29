var gulp = require('gulp-help')(require('gulp'));
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var jsdoc = require('gulp-jsdoc3');
var sequence = require('run-sequence');
var babel = require('gulp-babel');
var babelRegister = require('babel-core/register');
var spawn = require('child_process').spawn;
var path = require('path');
var gutil = require("gulp-util");
var webpack = require('webpack');
var webpack_conf = require('./webpack.config');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash.assign');
var sass = require('gulp-sass');
var tinylr = require('tiny-lr')();

var GULP_FILE = ['gulpfile.js'];
var SRC_FILES = ['src/**/*.js'];
var TEST_FILES = ['test/**/*.js'];
var TEST_CASE_FILES = ['test/**/*.spec.js'];
var COMPILED_SRC_DIR = 'build/source';
var JSDOC_DIR = 'build/jsdoc';
var WWW = "www/";
var WWW_JS = 'www/app/**/*.js';
var WWW_JS_ENTRYPOINT = 'www/app/index.js';
var SASS_SRC = ['www/styles/**/*.scss'];
var SASS_ENTRYPOINT = 'www/styles/main.scss';


const browserifyOptions = {
  entries: [WWW_JS_ENTRYPOINT],
  debug: true
};

////
//// Server-side tasks

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
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../../src' }))
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

////
//// client-side tasks

let notifyLiveReload = (event) => {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

let bundlejs = (browserified) => {
  return browserified.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({ loadMaps: true })) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('.')) // writes .map file
    .pipe(gulp.dest(WWW));
}

gulp.task('www-lint', 'Validates clientside code with "eslint"', function (done) {
  gulp.src(WWW_JS)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('finish', done);
});

gulp.task('browserify', 'bundles the clientside js files', function () {
  return bundlejs(browserify(browserifyOptions));
});

gulp.task('sass', 'bundles the clientside js files', function () {
  return gulp.src(SASS_ENTRYPOINT)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(WWW));
});

gulp.task('www', 'Builds clientside stuffs', ['browserify', 'www-lint', 'sass']);

/// clientside watches

gulp.task('watchify', 'bundles the clientside js files', function () {
  let b = watchify(browserify(browserifyOptions));

  b.on('update', () => bundlejs(b)); // on any dep update, runs the bundler
  b.on('log', gutil.log); // output build logs to terminal

  return bundlejs(b);
});

gulp.task('watch-sass', 'watches for scss changes', function () {
  gulp.watch(SASS_SRC, ['sass']);
});

gulp.task('livereload', function () {
  tinylr.listen(35729);
  
  gulp.watch(['www/**/*.html', 'www/main.css'], notifyLiveReload);
});

/// task defaults

gulp.task('watch', 'watches clientside js and scss', ['watch-sass', 'watchify', 'livereload']);

gulp.task('pre-commit', 'Being run automatically on a git pre-commit hook', ['build']);

gulp.task('ci', 'Being run on a CI', ['build', 'www']);

gulp.task('default', ['compile', 'www']);
