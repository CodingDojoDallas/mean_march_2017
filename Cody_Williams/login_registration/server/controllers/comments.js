var mongoose = require('mongoose');
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
				if(post){
					post.comments.push(comment._id)
					post.save(function(err, doc){
						if(err){
							console.log(err);
						}
						return res.json(doc);
					})
				}
			})
		})
	}
}