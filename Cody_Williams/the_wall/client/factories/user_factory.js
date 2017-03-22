app.factory('UserFactory', function($http){
	var factory = {};

	factory.login = function(loginUser, callback){
		$http.post('/sessions', loginUser).then(function(res){
			if(!res.data.error){
				factory.current_user = res.data;
			}
			callback(res);
		});
	}

	factory.session = function(callback){
		$http.get('/sessions').then(function(res){
			if(!res.data.error){
				factory.current_user = res.data;
			}
			callback(res);
		})
	}

	return factory;
})