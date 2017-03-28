var app = angular.module('myApp', []);

app.factory('ProductFactory', function(){
	var factory = {};
	var products = [
		{product: 'macbook', price:'2000'},
		{product: 'windows', price:'50'}
	];

	factory.index = function(callback){
		callback(products);
	}
	factory.create = function(newProduct, callback){
		products.push(newProduct);
		callback();
	}
	factory.destroy = function(product, callback){
		var index = products.indexOf(product);
		products.splice(index, 1);
		callback();
	}

	return factory;
});

app.controller('ProductsController', ['$scope', 'ProductFactory', function($scope, ProductFactory){
	$scope.products = [];

	$scope.index = function(){
		ProductFactory.index(function(products){
			$scope.products = products;
		});
	}
	$scope.create = function(newProduct){
		ProductFactory.create(newProduct, function(products){
			$scope.index();
			$scope.newProduct = {};
		})
	}
	$scope.destroy = function(product){
		ProductFactory.destroy(product, $scope.index)
	}

	$scope.index();
}])