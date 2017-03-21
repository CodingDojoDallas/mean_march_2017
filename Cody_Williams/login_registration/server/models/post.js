var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	post: {
		type: String,
		required: true
	},
	author: {
		type: String,
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, {timestamps: true})

var Post = mongoose.model('Post', PostSchema);
