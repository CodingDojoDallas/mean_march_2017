// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Require Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
//
mongoose.Promise = global.Promise;
//
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4 },
  message: { type: String, required: true, minlength: 1 },
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
 }, { timestamps: true });


var CommentSchema = new mongoose.Schema({
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  name: { type: String, required: true, minlength: 4 },
  comment: { type: String, required: true },
 }, {timestamps: true });

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/posts/:id', function (req, res){
 Post.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, post) {
      res.render('post', {post: post});
        });
});

app.post('/posts/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment(req.body);
        comment._post = post._id;
        post.comments.push(comment);
        comment.save(function(err){
          post.save(function(err){
            if(err) { console.log('Error'); }
            else { res.redirect('/'); }
          });
        });
  });
});

app.post('/post', function(req, res) {
  console.log(req.body);
  var post = new Post({name: req.body.user_name, message: req.body.user_message });
  post.save(function(err) {
   if(err) {
     res.redirect('/');
   } else {
     console.log('successfully added a message');
     res.redirect('/');
   }
 })
})

app.get('/', function(req, res) {
  Post.find({})
    .populate('comments')
    .exec(function(err, posts) {
          if(err) {
            res.render('index');
          } else {
            console.log("Posts have been inputted");
            res.render('index', {posts:posts});
          }
        })
})

app.post('/comment/:id', function(req, res) {
  Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment({name: req.body.comment_name, comment: req.body.comment_message});
        comment._post = post._id;
        comment.save(function(err){
          if (err){
            res.render('index');
          }
          else {
            post.comments.push(comment);
            post.save(function(err){
              if(err){
                console.log(err)
              }
              else{
                res.redirect('/')
              }
            })
          }
         });
    });
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})
