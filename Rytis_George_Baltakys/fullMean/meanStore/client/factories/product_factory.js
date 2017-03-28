app.factory('ProductFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/products').then(callback)
	}

	factory.create = function(newProduct, callback){
		$http.post('/products', newProduct).then(callback)
	}

	factory.delete = function(id, callback){
		$http.delete('/products/' + id).then(callback)
	}

	return factory
})