[![build][project-travis-ci-image]][project-travis-ci-url]
[![codeclimate][project-codeclimate-image]][project-codeclimate-url]
[![test coverage][project-codeclimate-coverage-image]][project-codeclimate-coverage-url]
[![npm dependencies][project-npm-dependencies]][project-npm-dependencies-url]
[![npm dev dependencies][project-npm-dev-dependencies]][project-npm-dev-dependencies-url]

# Rabbiteer 2016

This project <strike>is</strike> was a skeleton for a typical NodeJS application. Now it's been expanded
to be an Express hosted Angular single page application.

This project contains a whole bunch of things you can work on for the Rabbiteer program :) 

## Prerequisites
1. Node

## Installation

1. git clone [https://github.com/RetroRabbit/rabbiteer-2016.git](https://github.com/RetroRabbit/rabbiteer-2016.git)
2. Navigate into folder and run `npm install`
3. Start the site by running `npm start` (Or just press <kbd>F5</kbd> in VS Code).

## What is included

- Code linter - [eslint][eslint-url]
- Test runner - [mocha][mocha-url]
- Test coverage checker - [istanbul][istanbul-url]
- Task manager - [gulp][gulp-url]
- <strike>Pre-commit hook</strike>
- JsDoc generation - [jsdoc][jsdoc-url]
- ES6 Support([ECMA-262, Edition 5][ecma-262-edition-5-url]) - [babel][babel-url]
- Codeclimate integration [codeclimate][codeclimate-url]
- TravisCI integration [travis-ci][travis-ci-url]
- Editor Config [editorconfig][editor-config-url]
- List all available tasks using <strike>`gulp help`</strike> `npm run` command
- **Javascript intellisense using [Typings][typings-url]**
- **[Express][express-url] hosting [Angular][angular-url] single page application**
- **[Sass][sass-url] Stylesheets downcompiling to css**
- **Clientside javascript using [Browserify][browserify-url]**
- **Dev support including watches for css and js, and [LiveReload][liverload-url] for rapid dev**

## Linting

```bash
npm run lint
```

Code that will be validated:

- all **\*.js** files in **src** folder
- all **\*.js** files in **test** folder
- all **\*.js** files in **www** folder
- **gulpfile.js**

## Running tests and generating code coverage report

```bash
npm run coverage
```

Test cases stored in files **test/\*\*/\*.spec.js** will be run only

Coverage reports will be generated and stored in folder **build/coverage**

## Generating jsdoc

```bash
npm run jsdoc
```

Documentation will be generated for **\*.js** files from **src** folder and stored in folder **build/jsdoc**

## Compiling code - ES6 Support

Since **nodejs** doesn't fully support all ES6 features source code should be compiled.

```bash
npm run build
```

Source code in **src** folder will be compiled and stored in folder **build/source**

## Running all tasks

```bash
gulp
# or
gulp build
```

## <strike>Pre-commit hook</strike>

<strike>
This hook is invoked by git commit, and can be bypassed with --no-verify option.

The task gulp build will be run automatically.
</strike>

## Printing all available tasks and theirs arguments

```bash
npm run
```

[project-travis-ci-image]: https://travis-ci.org/RetroRabbit/rabbiteer-2016.svg?branch=master
[project-travis-ci-url]: https://travis-ci.org/RetroRabbit/rabbiteer-2016
[project-codeclimate-image]: https://codeclimate.com/github/RetroRabbit/rabbiteer-2016/badges/gpa.svg
[project-codeclimate-url]: https://codeclimate.com/github/RetroRabbit/rabbiteer-2016
[project-codeclimate-coverage-image]: https://codeclimate.com/github/RetroRabbit/rabbiteer-2016/badges/coverage.svg
[project-codeclimate-coverage-url]: https://codeclimate.com/github/RetroRabbit/rabbiteer-2016/coverage
[project-npm-dependencies]: https://david-dm.org/RetroRabbit/rabbiteer-2016/status.svg
[project-npm-dependencies-url]: https://david-dm.org/RetroRabbit/rabbiteer-2016
[project-npm-dev-dependencies]: https://david-dm.org/RetroRabbit/rabbiteer-2016/dev-status.svg
[project-npm-dev-dependencies-url]: https://david-dm.org/https://david-dm.org/RetroRabbit/rabbiteer-2016#info=devDependencies&view=table
[eslint-url]: http://eslint.org
[mocha-url]: http://mochajs.org/
[istanbul-url]: https://github.com/gotwarlost/istanbul/
[gulp-url]: http://gulpjs.com/
[jsdoc-url]: http://usejsdoc.org/
[ecma-262-edition-5-url]: http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf
[babel-url]: https://babeljs.io/
[codeclimate-url]: https://codeclimate.com/
[travis-ci-url]: https://travis-ci.org/
[editor-config-url]: http://editorconfig.org/
[browserify-url]: http://browserify.org/
[express-url]: https://expressjs.com/
[angular-url]:https://angularjs.org/
[sass-url]: http://sass-lang.com/
[liverload-url]: http://livereload.com/
[typings-url]: https://github.com/typings/typings