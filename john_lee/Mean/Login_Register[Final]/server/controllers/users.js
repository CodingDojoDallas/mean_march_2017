var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');

module.exports = {
	session: function(req,res){
		if(!req.session.user){
			return res.send({error: "You are not logged in"})
		}
		return req.session.user;
	},

	index: function(req, res){
		if(!req.session.user){
			return res.json({"error": "Not Authorized"})
		}
		User.find({}).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc);
		})
	},

	login: function(req, res){
		var isValid = true;
		User.findOne({email: req.body.email}).exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			if(!doc){
				isValid = false;
			} else {
				if(bcrypt.compareSync(req.body.password, doc.password)){
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
				"Error":"Not Authorized"
			})
		}
		req.session.destroy(function(err){
			if(err){
				console.log(err)
			}
			else{
				res.json({usccess:true})
			}
		})
	},

	create: function(req, res){
		if(req.body.password != req.body.passwordconfirm){
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
			doc.firstname = req.body.firstname;
      doc.lastname = req.body.lastname;
      doc.birthday = req.body.birthday;
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
