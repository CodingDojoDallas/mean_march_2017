var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/new_users.html',
    controller: 'UsersController as UC'
  })
  .when('/success', {
    templateUrl: 'partials/index_users.html',
    controller: 'UsersController as UC'
  })
})
