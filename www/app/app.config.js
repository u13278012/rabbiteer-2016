module.exports = function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider.state('Home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: require('./home.controller')
  });

  $stateProvider.state('Page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    controller: require('./page1.controller')
  });

  $stateProvider.state('Page2', {
    url: '/page2',
    templateUrl: 'templates/page2.html',
    controller: require('./page2.controller')
  });
}