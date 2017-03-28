var app = angular.module('myApp', []);

app.controller('UsersController', ['$scope', function($scope){
	$scope.newUser = {};
	$scope.users = [
	{first_name: 'Aly', last_name: 'Hemani', fav_language: 'JavaScript'},
	];
	$scope.addUser = function(newUser){
		$scope.users.push(newUser);
		$scope.newUser = {};
	}
	$scope.deleteUser = function(usertoDelete){
		$scope.users = $scope.users.filter(function(user){
			return user !== usertoDelete;
		})
	}
}])