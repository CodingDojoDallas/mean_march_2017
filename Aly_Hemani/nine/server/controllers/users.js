var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res){
		User.find({}).exec(function(err, users){
			if(err){
				return res.json(err);
			}
			return res.json(users);
		})
	},
	create: function(req, res){
		var user = new User()
		user.name = req.params.name;
		user.save(function(err, user){
			if(err){
				return res.json(err);
			}
			return res.json(user);
		})
	},
	destroy: function(req, res){
		User.findOne({name: req.params.name}).exec(function(err, user){
			if(err){
				return res.json(err);
			}
			if(user){
				user.remove()
			}
			return res.redirect('/');
		})
	},
	show: function(req, res){
		User.findOne({name: req.params.name}).exec(function(err, user){
			if(err){
				return res.json(err);
			}
			if(user){
				return res.json(user);
			}
			return res.json({error: 'no user found'})
		})
	}
}

