var app = angular.module('app', [])

app.factory('productFactory', function(){
	var factory = {}
	var products = [
		{name: 'Mouse', price: 7.95, quantity: 50},
		{name: 'Keyboard', price: 12.99, quantity: 50},
		{name: '3 Tennis Balls', price: 2.99, quantity: 50}
	]

	factory.getProducts = function(callback){
		callback(products)
	}

	factory.addProduct = function(newProduct, callback){
		newProduct.quantity = 50
		products.push(newProduct)
		callback()
	}

	factory.destroyProduct = function(product, callback){
		products.splice(products.indexOf(product), 1)
		callback()
	}

	factory.orderProduct = function(product, callback){
		if (product.quantity > 0)
			product.quantity--
		callback()
	}

	return factory
})

app.controller('productController', ['productFactory', function(productFactory){
	var self = this

	self.getProducts = function() {
		productFactory.getProducts(function(products){
			self.products = products
			self.newProduct = {}
		})
	}

	self.addProduct = function(newProduct){
		productFactory.addProduct(newProduct, self.getProducts)
	}
	
	self.destroyProduct = function(product){
		productFactory.destroyProduct(product, self.getProducts)
	}

	self.getProducts()
}])

app.controller('orderController', ['productFactory', function(productFactory){
	var self = this

	self.getProducts = function() {
		productFactory.getProducts(function(products){
			self.products = products
			self.newProduct = {}
		})
	}

	self.orderProduct = function(product){
		productFactory.orderProduct(product, self.getProducts)
	}

	self.getProducts()
}])