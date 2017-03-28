app.factory('UserFactory', function($http){
	var factory = {}

	factory.users = []

	factory.index = function(callback){
		$http.get('/api/users').then(callback)
	}

	factory.login = function(loginUser, callback){
		$http.post('/login', loginUser).then(callback)
	}

	factory.logout = function(callback){
		$http.post('/logout').then(callback)
	}

	factory.create = function(newUser, callback){
		$http.post('/api/users', newUser).then(function(res){
			if (!res.data.errors){
				
			}
			callback(res)
		})
	}

	return factory
})