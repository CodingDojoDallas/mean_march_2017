var mongoose = require('mongoose');
var Post = mongoose.model('User');

module.exports = {
	index: function(req, res){
		Post.find({}).populate('_user').exec(function(err, users){
			if(err){
				console.log(err);
			}
			else{
				res.render('index.ejs', {users:users});
			}
		})
	},
	create: function(req, res){
		var Post = new Post();
		post.post = req.body.post;
		post._user = req.session.user_id
		post.save(function(err, post){
			res.render('posts.ejs', {post: post})
			User.find({_id: req.session.user_id}, function(err, user){
				if(err){
					console.log(err);
				}
				else{
					user.posts.push(post._id)
				}
			})
		})
	}
}