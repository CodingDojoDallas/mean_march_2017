var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	session: function(req, res){
		if(!req.session.user){
			return res.json({
				"error": "you are not authorized"
			})
		}
		return req.session.user;
	},
	index: function(req, res){
		if(!req.session.user){
			return res.json({
				"error": "you are not authorized"
			})
		}
		User.find({}).exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	},
	login: function(req, res){
		User.findOne({email: req.body.email}).exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			if(!doc){
				return res.json({
					"error": "invalid credentials"
				})
			}
			if(doc.password == req.body.password){
				req.session.user = doc;
				return res.json(doc);
			}
			else{
				return res.json({
					"error": "invalid credentials"
				})
			}
		})
	},
	create: function(req, res){
		var user = new User(req.body);
		user.save(function(err, doc){
			if(err){
				return res.json(err);
			}
			delete doc.password;
			req.session.user = doc;
			return res.json(doc);
		})
	}
}