var mongoose = require('mongoose')

var ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		unique: true
	},
	quantity: {
		type: Number,
		required: true
	}
}, {timestamps: true})

var Product = mongoose.model('Product', ProductSchema)
