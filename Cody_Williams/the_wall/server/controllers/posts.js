var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res){
		Post.find({}).populate('comments').exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	},
	create: function(req, res){
		if(!req.session.user){
			return res.json({
				"error": "you are not authorized"
			})
		}
		var post = new Post(req.body);
		post.save(function(err, post){
			if(err){
				return res.json(err);
			}
			User.findById(req.session.user._id).exec(function(err, user){
				if(err){
					return res.json(err);
				}
				if(!user){
					return res.send({
						"error": "invalid user"
					})
				}
				user.posts.push(post._id);
				user.save(function(err, user){
					if(err){
						return res.json(err);
					}
					return res.json(post);
				})
			})
		})
	}
}