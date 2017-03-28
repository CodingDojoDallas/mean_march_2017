var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/partial1', {
		templateUrl: 'partials/home.html',
		controller: 'Partial1Controller as P1C'
	})
	.when('/partial2', {
		templateUrl: 'partials/partial2.html',
		controller: 'Partial2Controller as P2C'
	})
	.otherwise('/partial2')
})

app.controller('LocationController', function($location){
	var self = this;

	this.loadPartialOne = function(){
		$location.url('/partial1');
	}
	this.loadPartialTwo = function(){
		$location.url('/partial2');
	}
})

app.controller('Partial1Controller', function(){
	console.log('Partial1Controller invoked')
})

app.controller('Partial2Controller', function(){
	console.log('Partial2Controller invoked')
})