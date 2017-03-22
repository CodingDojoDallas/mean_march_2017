var mongoose = require('mongoose');
var CommentSchema = mongoose.Schema({
  comment: {
   type: String,
   required: [true, 'Please enter something'],
  },
  author: {
    type: String
  },
  _post:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
