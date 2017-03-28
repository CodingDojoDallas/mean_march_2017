var app = angular.module('myApp', []);

app.controller('DivsController', ['$scope', function($scope){
	$scope.myName = 'Aly';
	$scope.myFavoriteLanguage = 'JavaScript';
	$scope.myFavoriteJSLibrary = 'Angular';
}])