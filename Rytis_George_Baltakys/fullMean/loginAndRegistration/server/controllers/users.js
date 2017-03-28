var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require('bcryptjs')

module.exports = {
	session: function(req, res){
		if(!req.session.user)
			return res.send({"errors": "You are not logged in"})
		return req.session.user
	},
	index: function (req, res) {
		if(!req.session.user)
			return res.json({"errors": "You are not logged in"})
		User.find({}).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc)
		})
	},
	login: function(req, res){
		var isValid = true
		User.findOne({email: req.body.email}).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			if(!doc){
				return res.json({"errors": "Invalid credentials"})
			} else {
				if(bcrypt.compareSync(req.body.password, doc.password)){
					var user = {
						first_name: doc.first_name,
						last_name: doc.last_name,
						email: doc.email
					}
					req.session.user = user
					return res.json(user)
				} else {
					return res.json({"errors": "Invalid credentials"})
				}
			}
		})
	},
	logout: function(req, res){
		if(!req.session.user)
			return res.json({"errors": "You are not logged in"})
		req.session.destroy(function(err){
			console.log(err)
			return err
		})
	},
	create: function(req, res){
		if(req.body.password != req.body.password_confirm){
			return res.json({
				"errors": {
					"password": {
						"message": "Your passwords do not match"
					}
				}
			})
		}
		var user = new User(req.body)
		user.save(function(err, doc){
			if(err){
				return res.json(err)
			}
			var user = {
				first_name: doc.first_name,
				last_name: doc.last_name,
				email: doc.email
			}
			req.session.user = user
			return res.json(user)
		})
	},
	show: function(req, res){
		if(!req.session.user)
			return res.json({"errors": "You are not logged in"})
		User.findById(req.params.id).exec(function(err, doc){
			if(err){
				return res.json({
					"errors":{
						"message": "User not found"
					}
				})
			}
			if(doc){
				return res.json(doc)
			}
		})
	},
	update: function(req, res){
		if(!req.session.user)
			return res.json({"error": "You are not logged in"})
		User.findById(req.params.id).exec(function(err, doc){
			if(err){
				return res.json({
					"errors":{
						"message": "User not found"
					}
				})
			}
			doc.name = req.body.name
			doc.email = req.body.email
			doc.save(function(err, doc){
				if(err){
					return res.json(err)
				}
				return res.json(doc)
			})
		})
	},
	destroy: function(req, res){
		if(!req.session.user)
			return res.json({"errors": "You are not logged in"})
		User.findByIdAndRemove(req.params.id).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc)
		})
	}
}