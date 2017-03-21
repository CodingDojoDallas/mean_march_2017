app.controller('PostsController', function(PostFactory, UserFactory){
	var self = this;
	self.posts = [];

	self.index = function(){
		PostFactory.index(function(res){
			console.log('posts', res);
			self.posts = res.data;
		});
	}

	self.create = function(newPost){
		newPost.author = UserFactory.current_user.name;
		PostFactory.create(newPost, function(res){
			self.newPost = {};
			self.index();
		})
	}

	self.createComment = function(newComment, post_id, index){
		newComment.author = UserFactory.current_user.name;
		newComment._post = post_id
		PostFactory.createComment(newComment, function(res){
			self.newComment[index] = {};
			self.index();
		})
	}

});
