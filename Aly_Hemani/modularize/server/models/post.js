var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
	post: String,
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

var Post = mongoose.model('Post', PostSchema);