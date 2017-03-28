var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res){
		User.find({}).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc);
		})
	},
	create: function(req, res){
		console.log(req.body);
		var user = new User(req.body);
		user.save(function(err, doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	},
	show: function(req, res){
		User.findById(req.params.id).exec(function(err, doc){
			if(err){
				return res.json({
					"errors":{
						"message": "User not found!"
					}
				})
			}
			if(doc){
				return res.json(doc);
			}
		})
	},
	update: function(req, res){
		User.findById(req.params.id).exec(function(err,doc){
			if(err){
				return res.json({
					"errors": {
						"message": "User not found!"
					}
				});
			}
			doc.name = req.body.name;
			doc.email = req.body.email;
			doc.save(function(err, doc){
				if(err){
					return res.json(err);
				}
				return res.json(doc);
			})

		})
	},
	destroy: function(req, res){
		User.findByIdandRemove(req.params.id).exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	}
}