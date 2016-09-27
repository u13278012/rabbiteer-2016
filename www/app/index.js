//This is the entry point for our clientside angular app
const angular = require('angular');
const angularLoadingBar = require('angular-loading-bar');
const angularUiRouter = require('angular-ui-router');

//webpack requires loading of styles like this:
require("../styles/main.scss");

//initialize our angular module
angular.module('app', [angularLoadingBar, angularUiRouter]);

