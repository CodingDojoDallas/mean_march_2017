var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3
	},
	email: {
		type: String,
		required: true,
		unique: true,
	}
}, {timestamps: true})

var User = mongoose.model('User', UserSchema);