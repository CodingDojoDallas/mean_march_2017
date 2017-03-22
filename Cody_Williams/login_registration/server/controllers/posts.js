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
		if(!req.body.token){
			return res.json({
				"errors": "not authorized"
			})
		}
		User.findById(req.body.token).exec(function(err, doc){
			if(err){
				return res.json({
					"errors": "not authorized"
				})
			}
			if(!doc){
				return res.json({
					"errors": "not authorized"
				})
			}
			var post = new Post(req.body);
			post.save(function(err, doc){
				if(err){
					return res.json(err);
				}
				return res.json(doc);
			})
		})
	}
}