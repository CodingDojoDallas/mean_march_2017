var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
	name:{
		type: String,
		required: true,
		minlength: 3,
		unique: true,
	}
})

var User = mongoose.model('User', UserSchema);