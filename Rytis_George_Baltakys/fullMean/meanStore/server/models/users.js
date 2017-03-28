var mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		unique: true
	},
	orders: [{type: mongoose.Schema.Types.ObjectId, ref:'Orders'}]
}, {timestamps: true})

var User = mongoose.model('User', UserSchema)
