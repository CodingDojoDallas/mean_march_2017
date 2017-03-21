var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
	create: function(req, res){
		var comment = new Comment(req.body);
		comment.save(function(err, comment){
			if(err){
				return res.json(err);
			}
			Post.findById(req.body._post).exec(function(err, post){
				if(err){
					return res.json(err);
				}
				if(!post){
					return res.json({
						"error": "invalid post id"
					})
				}
				post.comments.push(comment._id);
				post.save(function(err, post){
					if(err){
						return res.json(err);
					}
					User.findById(req.session.user._id).exec(function(err, user){
						if(err){
							return res.json(err);
						}
						user.comments.push(comment._id);
						user.save(function(err, user){
							if(err){
								return res.json(err);
							}
							return res.json(post);
						})
					})
				})
			})
		})
	}
}