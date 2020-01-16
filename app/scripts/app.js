'use strict';

var crossOverApp = angular.module('crossOverApp', [
  'ngRoute',
  'ui.router',
  'ngResource',
  'mainControllers'
]);

crossOverApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {
          templateUrl: '/views/home.html',
          controller: 'mainCtrl'
        }
      }
    });

  // For any unmatched url, redirect to Home Page
  $urlRouterProvider.otherwise('/');

}]);

crossOverApp.run(function() {

});
