var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	name: String,
	email: String,
	posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

var User = mongoose.model('User', UserSchema);