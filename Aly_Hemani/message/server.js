var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/messages');
console.log('connecting to DB')

var MessagesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 4,
	},
	message: {
		type: String, 
		required: true,
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId, ref:'Comment'
	}]
})

var commentSchema = new mongoose.Schema({
	_message: {
		type: mongoose.Schema.Types.ObjectId, ref:'Message',
	},
	name:{
		type: String,
		required: true,
	},
	comment: {
		type: String, 
		required: true
	},
})

var Message = mongoose.model('Message', MessagesSchema);

var Comment = mongoose.model('Comment', commentSchema);

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	Message.find({})
	.populate('comments')
	.exec(function(err, messages){
		if(err){
			res.render('index');
		}
		else{
			console.log('comments have been added');
			res.render('index', {messages: messages});
		}
	})
})

app.post('/messages', function(req, res){
	var message = new Message(req.body);
	console.log(req.body);
	message.save(function(err, message){
		if(err){
			console.log(err);
		}
		else{
			console.log(message);
			res.redirect('/')
		}
	})

})

app.post('/comment/:id', function(req,res){
	var message_id = req.params.id;
	Message.findOne({_id: message_id}, function(err, message){
		var newComment = new Comment({name: req.body.name, comment: req.body.comment});
		newComment._message = message_id;
		newComment.save(function(err){
			if(err){
				console.log(err);
				res.render('index', {errors: newComment.errors});
			}
			else{
				Message.update({_id: message._id}, {$push: {"comments": newComment}}, function(err){
					if(err){
						console.log(err)
					} 
					else {
						res.redirect('/')
					}
				});
				console.log(req.body);
			}
		})
	}) 
})

app.listen(8000, function(){
	console.log('listening on 8000')
})