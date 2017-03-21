var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	comment: {
		type: String
	},
	author: {
		type: String
	},
	_post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}
}, {timestamps: true});

var Comment = mongoose.model('Comment', CommentSchema);
