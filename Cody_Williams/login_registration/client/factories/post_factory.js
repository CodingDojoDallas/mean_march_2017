app.factory('PostFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/posts').then(callback);
	}

	return factory;
})