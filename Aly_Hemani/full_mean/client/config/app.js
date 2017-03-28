var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/users_index.html',
		controller: 'UsersController as UC'
	})
	.when('/users/new', {
		templateUrl: 'partials/users_new.html',
		controller: 'UsersController as UC'
	})
})