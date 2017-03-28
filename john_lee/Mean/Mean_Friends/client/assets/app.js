// angular routes is injected into your app as the
// SECOND parameter to angular.module() function
// any additional libraries, such as angular cookies, are injected
// in the same way but separated by commas ['ngRoute', 'ngCookies']
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'main_Controller',
      controllerAs: 'MC'
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'new_Controller',
      controllerAs: 'NC'
    })
    .when('/edit/:_id', {
      templateUrl: 'partials/edit.html',
      controller: 'edit_Controller',
      controllerAs: 'EC'
    })
    .when('/show/:_id', {
      templateUrl: 'partials/show.html',
      controller: 'edit_Controller',
      controllerAs: 'EC'
    })
    .otherwise({
      redirectTo: '/'
    });
});
