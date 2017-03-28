var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var secret = 'ciamanopaslaptis'

module.exports = {
	session: function(req, res){

	},
	index: function (req, res){
		User.find({}).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc)
		})
	},
	login: function(req, res){
		var isValid = true
		User.findOne({email: req.body.email}).exec(function(err, user){
			if(err){
				return res.json(err)
			}
			if(!user){
				isValid = false
			} else {
				if(bcrypt.compareSync(req.body.password, user.password)){
					// login
					var jsonUser = {
						first_name: user.first_name,
						last_name: user.last_name	
					}
					var token = jwt.sign(user.email, secret)
					return res.json({
						token: token,
						user: jsonUser
					})
				} else {
					isValid = false
				}
			}
			if (!isValid){
				return res.json({
					"errors": {
						"login": {
							"message": "Invalid credentials"
						}
					}
				})
			}
		})
	},
	logout: function(req, res){
		
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
			return res.json(doc)
		})
	},
	show: function(req, res){
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
		User.findByIdAndRemove(req.params.id).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc)
		})
	}
}