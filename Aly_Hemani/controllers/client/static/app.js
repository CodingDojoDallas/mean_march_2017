var app = angular.module('myApp', []);

app.controller('ProductsController', ['$scope', function($scope){
	$scope.newProduct = '';
	$scope.products = [
	'pizza',
	'BBQ',];
	$scope.addProduct = function(newProduct){
		$scope.products.push(newProduct);
		$scope.newProduct = '';
	}
}])