var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'Partial1Controller as p1c'
	})
	.when('/partial2', {
		templateUrl: 'partials/partial2.html',
		controller: 'Partial2Controller as p2c'
	})
	.otherwise('/')
})

app.controller('LocationController', function($location){
	this.loadPartialOne = function() {
		$location.url('/')
	}
	this.loadPartialTwo = function() {
		$location.url('/partial2')
	}
})

app.controller('Partial1Controller', function() {
	console.log('Partial1Controller invoked')
})

app.controller('Partial2Controller', function() {
	console.log('Partial2Controller invoked')
})
