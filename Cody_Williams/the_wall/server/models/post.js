var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	post: {
		type: String,
	},
	author: {
		type: String,
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, {timestamps: true})

mongoose.model('Post', PostSchema);
