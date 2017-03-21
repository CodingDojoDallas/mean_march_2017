app.controller('PostsController', function(PostFactory){
	var self = this;
	self.posts = [];

	self.index = function(){
		PostFactory.index(function(res){
			console.log(res.data);
			self.posts = res.data;
		});
	}

})