var express = require("express")
var path = require("path")
var app = express()
var mongoose = require("mongoose")
var bodyParser = require('body-parser')
var moment = require('moment')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./static")))

mongoose.connect('mongodb://localhost/dojo_message_board')

// Use native promises to solve mongoose deprication problem
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})
var CommentSchema = new mongoose.Schema({
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	text: String
}, {timestamps: true})
mongoose.model('Post', PostSchema)
mongoose.model('Comment', CommentSchema)

var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

errors = null

app.get('/', function(req, res) {
	Post.find({})
	.populate('comments')
	.exec(function(err, posts){
		console.log(posts)
		res.render('index', { posts: posts, errors: errors, moment: moment })
	})
})

app.post('/posts', function(req, res) {
	var post = new Post({name: req.body.name, message: req.body.message});
	post.save(function(err){
		if(err){
			console.log("something went wrong")
			// validation in case there is an error with the save to the database
			errors = err
			res.redirect('/')
		} else {
			errors = null
			// else console.log that we did well and then redirect to the root route
			console.log("successfully added a post!")
			res.redirect('/')
		}
	})
})

app.post('/comments/:id', function(req, res) {
	Post.findOne({_id: req.params.id}, function(err, post){
		var comment = new Comment(req.body)
		comment._post = post._id
		comment.text = req.body.comment
		post.comments.push(comment)
		comment.save(function(err) {
			post.save(function(err) {
				if(err) { console.log('Error') } 
				else { res.redirect('/') }
			});
		});
	});
})

				// <% for (var c in comments) { %>
				// 	Name: <%= comments[c].name %>
				// 	Comment: <%= comments[c].text %>
				// <% } %>

// app.get('/quotes/destroy/:id', function(req, res) {
// 	Quotes.remove({_id: req.params.id}, function(err){
// 		if(err){
// 			console.log("something went wrong");
// 			res.redirect('/');
// 		} else {
// 			res.redirect('/quotes');
// 		}
// 	})
// })

// app.get('/quotes/like/:id', function(req, res) {
// 	Quotes.update({_id: req.params.id}, {$inc: {likes: 1}}, function(err){
// 		res.redirect('/quotes');
// 	})
// })

app.listen(5000, function() {
	console.log("listening on port 5000")
})