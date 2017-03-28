var mongoose = require('mongoose')
var Product = mongoose.model('Product')

module.exports = {
	index: function (req, res) {
		Product.find({}).exec(function(err, products){
			if(err){
				return res.json(err)
			}
			return res.json(products)
		})
	},
	create: function(req, res){
		var product = new Product(req.body)
		product.save(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(product)
		})
	},
	delete: function(req, res){
		Product.findByIdAndRemove(req.params.id).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc)
		})
	}
}