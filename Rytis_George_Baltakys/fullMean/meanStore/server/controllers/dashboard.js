var mongoose = require('mongoose')
var Product = mongoose.model('Product')
var Order = mongoose.model('Order')
var User = mongoose.model('User')

module.exports = {
	index: function (req, res) {
		var data = {}
		Product.find({}).limit(parseInt(req.params.limit)).exec(function(err, products){
			if(err){
				return res.json(err)
			}
			data.products = products
			Order.find({}).limit(parseInt(req.params.limit)).populate('products.product').populate('_user').exec(function(err, orders){
				if(err){
					return res.json(err)
				}
				data.orders = orders
				User.find({}).limit(parseInt(req.params.limit)).exec(function(err, users){
					if(err){
						return res.json(err)
					}
					data.users = users
					return res.json(data)
				})
			})
		})
	}
}