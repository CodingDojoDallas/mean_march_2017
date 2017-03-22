var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
	post: {
		type: String,
		required: true,
		minlength: 1
	},
	author: {
		type: String,
	},
	comments:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, {timestamps: true});

mongoose.model('Post', PostSchema);
