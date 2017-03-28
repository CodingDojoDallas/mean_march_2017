app.factory('UserFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/users').then(callback)
	}

	factory.create = function(newUser, callback){
		$http.post('/users', newUser).then(callback)
	}

	factory.delete = function(id, callback){
		$http.delete('/users/' + id).then(callback)
	}

	return factory
})