app.factory('UserFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/users').then(callback)
	}

	factory.login = function(loginUser, callback){
		$http.post('/sessions', loginUser).then(function(res){
			if (!res.data.errors){
				factory.current_user = res.data
			}
			callback(res)
		})
	}

	factory.session = function(){
		$http.get('/sessions', loginUser).then(function(res){
			if (!res.data.errors){
				factory.current_user = res.data
			}
			callback(res)
		})
	}

	factory.logout = function(callback){
		$http.post('/logout').then(callback)
	}

	factory.create = function(newUser, callback){
		$http.post('/users', newUser).then(function(res){
			if (!res.data.errors){
				// log in
			}
			callback(res)
		})
	}

	return factory
})