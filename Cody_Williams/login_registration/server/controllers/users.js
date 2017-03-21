var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs')

module.exports = {
	//helper function for checking session, to be invoked by angular
	//unfortunately this cannot be envoked with 'this'
	session: function(req, res){
		if(!req.session.user){
			return res.send({error: "You are not logged in."})
		}
		return req.session.user;
	},
	index: function(req, res){
		if(!req.session.user){
			return res.json({
				"error": "not authorized"
			})
		}
		User.find({}).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc);
		})
	},
	//no need to check session here
	login: function(req, res){
		var isValid = true;
		User.findOne({email: req.body.email}).exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			if(!doc){
				isValid = false;
			} else {
				//successfull login
				if(bcrypt.compareSync(req.body.password, doc.password)){
					req.session.user = doc;
					console.log(req.session)
					return res.json(doc);
				} else {
					isValid = false;
				}
			}
			if(!isValid){
				return res.json({
					"errors": {
						"login": {
							"message": "Invalid credentials."
						}
					}
				})
			}
		})
	},
	logout: function(req, res){
		if(!req.session.user){
			return res.json({
				"error": "not authorized"
			})
		}
		req.session.destroy(function(err){
			if(err){
				console.log(err)
			} else {
				res.json({success: true})
			}
		})
	},
	create: function(req, res){
		if(req.body.password != req.body.password_confirmation){
			return res.json({
				"errors": {
					"password": {
						"message": "Your passwords do not match!"
					}
				}
			})
		}
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
				});
			}
			if(doc){
				return res.json(doc);
			} 
			
		})
	},
	update: function(req, res){
		if(!req.session.user){
			return res.json({
				"error": "not authorized"
			})
		}
		User.findById(req.params.id).exec(function(err, doc){
			if(err){
				return res.json({
					"errors":{
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
		if(!req.session.user){
			return res.json({
				"error": "not authorized"
			})
		}
		User.findByIdAndRemove(req.params.id).exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	}
}



