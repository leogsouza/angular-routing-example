// create the module and name it scotchApp
var simpleApp = angular.module('simpleApp', ['ngRoute']);

// configuring routes
simpleApp.config( function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    })
    .when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'aboutController'
    })
    .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'contactController'
    });
});


// create the controller and inject Angular's $scope
simpleApp.controller('mainController', function ($scope) {

  // create a message to display in our view
  $scope.message = 'This is an Simple App Example in Angular';
});

simpleApp.controller('aboutController', function($scope) {
  $scope.message = 'This is the about page';
});

simpleApp.controller('contactController', function($scope) {
  $scope.message = 'This is the contact page';
});
