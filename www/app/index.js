//This is the entry point for our clientside angular app
const angular = require('angular');
const angularLoadingBar = require('angular-loading-bar');
const angularUiRouter = require('angular-ui-router');

//initialize our angular module
const app = angular.module('app', [angularLoadingBar, angularUiRouter]);

//configuration (incl routing)
app.config(require('./app.config'));

//our main app controller
app.controller('AppController', require('./app.controller'));