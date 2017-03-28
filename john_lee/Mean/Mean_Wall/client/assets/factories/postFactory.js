app.factory('PostFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/posts').then(callback);
	}

	factory.create = function(newPost, callback){
		$http.post('/posts', newPost).then(callback);
	}

	factory.createComment = function(newComment, callback){
		$http.post('/comments', newComment).then(callback);
	}

	return factory;
})
