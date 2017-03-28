var app = angular.module('myApp', []);

app.controller('UsersController', ['$scope', function($scope){
	$scope.newUser = {};
	$scope.users = [
	{name: 'cody'},
	{name: 'adam'},
	{name: 'troy'}];
	$scope.addUser = function(newUser){
		$scope.users.push(newUser);
		$scope.newUser= {}
	}
}])