[![build][project-travis-ci-image]][project-travis-ci-url]
[![codeclimate][project-codeclimate-image]][project-codeclimate-url]
[![test coverage][project-codeclimate-coverage-image]][project-codeclimate-coverage-url]
[![npm version][project-npm-version]][project-npm-version-url]
[![npm dependencies][project-npm-dependencies]][project-npm-dependencies-url]
[![npm dev dependencies][project-npm-dev-dependencies]][project-npm-dev-dependencies-url]

# Rabbiteer 2016

This project is a skeleton for a typical NodeJS application.

The idea is to group useful tools and good practices for every application is being developed in node.

This project will grow to contain a whole bunch of things you can work on for the Rabbiteer program :) 

## Prerequisites
1. Node

## Installation

1. Run `npm install gulp -g` which will install gulp globally so you can run it from command.
2. git clone https://github.com/RetroRabbit/rabbiteer-2016.git
2. Navigate into folder and run `npm install`

## What is included

- Code linter - [eslint][eslint-url];
- Test runner - [mocha][mocha-url];
- Test coverage checker - [istanbul][istanbul-url];
- Task manager - [gulp][gulp-url];
- Pre-commit hook;
- JsDoc generation - [jsdoc][jsdoc-url];
- ES6 Support([ECMA-262, Edition 5][ecma-262-edition-5-url]) - [babel][babel-url];
- Codeclimate integration [codeclimate][codeclimate-url];
- TravisCI integration [travis-ci][travis-ci-url];
- Editor Config [editorconfig][editor-config-url];
- List all available tasks using `gulp help` command;

## Linting

```bash
gulp lint
```

Code that will be validated:

- all **\*.js** files in **src** folder
- all **\*.js** files in **test** folder
- **gulpfile.js**

## Running tests and generating code coverage report

```bash
gulp test
```

Test cases stored in files **test/\*\*/\*.test.js** will be run only

Coverage reports will be generated and stored in folder **build/coverage**

## Generating jsdoc

```bash
gulp jsdoc
```

Documentation will be generated for **\*.js** files from **src** folder and stored in folder **build/jsdoc**

## Compiling code - ES6 Support

Since **nodejs** doesn't fully support all ES6 features source code should be compiled.

```bash
gulp compile
```

Source code in **src** folder will be compiled and stored in folder **build/source**

## Running all tasks

```bash
gulp
# or
gulp build
```

## Pre-commit hook

This hook is invoked by **git commit**, and can be bypassed with **--no-verify** option.

The task **gulp build** will be run automatically.

## Printing all available tasks and theirs arguments

```bash
gulp help
```

## Directory Layout

```
  build/                  --> build results
    coverage              --> code coverage reports
    jsdoc                 --> documentation generated for source code
  src/                    --> source files for the application
    hello.js              --> added just for an example
  test/                   --> test files for the application
    .eslintrc             --> configuration file for eslint; these rules
                              will be applied for files in this folder
                              only; created because test cases contain
                              global functions which exports by
                              mocha(describe, it, beforeEach, etc)
    hello.test.js         --> added just for an example
  .editorconfig           --> configuration file for code editors to keep style
  .eslintrc               --> configuration file for eslint
  .travis.yml             --> configuration file for travis-ci
  gulpfile.js             --> list of all gulp tasks
```

[project-travis-ci-image]: https://travis-ci.org/RetroRabbit/rabbiteer-2016.svg?branch=master
[project-travis-ci-url]: https://travis-ci.org/hwndept/node-seed
[project-codeclimate-image]: https://codeclimate.com/github/hwndept/node-seed/badges/gpa.svg
[project-codeclimate-url]: https://codeclimate.com/github/hwndept/node-seed
[project-codeclimate-coverage-image]: https://codeclimate.com/github/hwndept/node-seed/badges/coverage.svg
[project-codeclimate-coverage-url]: https://codeclimate.com/github/hwndept/node-seed/coverage
[project-npm-version]: https://img.shields.io/npm/v/node-seed.svg
[project-npm-version-url]: https://www.npmjs.com/package/node-seed
[project-npm-dependencies]: https://david-dm.org/hwndept/node-seed/status.svg
[project-npm-dependencies-url]: https://david-dm.org/hwndept/node-seed
[project-npm-dev-dependencies]: https://david-dm.org/hwndept/node-seed/dev-status.svg
[project-npm-dev-dependencies-url]: https://david-dm.org/hwndept/node-seed#info=devDependencies&view=table
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
