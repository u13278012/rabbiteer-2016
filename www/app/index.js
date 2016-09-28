//This is the entry point for our clientside angular app
const angular = require('angular');
const angularLoadingBar = require('angular-loading-bar');
const angularUiRouter = require('angular-ui-router');


//webpack requires loading of styles like this:
require("../styles/main.scss");

//initialize our angular module
const app = angular.module('app', [angularLoadingBar, angularUiRouter]);

//our main app controller
app.controller('AppController', require('./app.controller'));
