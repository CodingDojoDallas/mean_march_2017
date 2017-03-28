var mongoose = require('mongoose')
var moment = require('moment')
var User = mongoose.model('User')

module.exports = {
	index: function (req, res) {
		User.find({}).exec(function(err, users){
			if(err){
				return res.json(err)
			}
			return res.json(users)
		})
	},
	create: function(req, res){
		var user = new User(req.body)
		user.save(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(user)
		})
	},
	delete: function(req, res){
		User.findByIdAndRemove(req.params.id).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc)
		})
	}
}