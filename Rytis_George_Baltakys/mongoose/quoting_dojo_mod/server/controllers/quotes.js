var mongoose = require("mongoose")
var moment = require('moment')
var Quote = mongoose.model("Quote")

module.exports = {
	create: function(req, res) {
		var quote = new Quote({name: req.body.name, quote: req.body.quote, likes: 0});
		quote.save(function(err){
			if(err){
				console.log("something went wrong");
				// validation in case there is an error with the save to the database
				res.render('new', {title: "You have errors!", errors: quote.errors})
			} else {
				// else console.log that we did well and then redirect to the root route
				console.log("successfully added a quote!");
				res.redirect('/quotes');
			}
		})
	},

	show: function(req, res) {
		Quote.find({}).sort('-createdAt').exec(function(err, quotes){
			res.render('quotes', { quotes:quotes, moment: moment });
		})
	},

	destroy: function(req, res) {
		Quote.remove({_id: req.params.id}, function(err){
			if(err){
				console.log("something went wrong");
				res.redirect('/');
			} else {
				res.redirect('/quotes');
			}
		})
	},

	like: function(req, res) {
		Quote.update({_id: req.params.id}, {$inc: {likes: 1}}, function(err){
			res.redirect('/quotes');
		})
	}
}