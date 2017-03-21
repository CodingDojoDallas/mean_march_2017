var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/messageBoard');

var MessageSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength:6},
  message: {type: String, required: true, minlength:100},
  comments: [{commenter:{type: String, required: true, minlength:6},comment:{type: String, required: true, minlength:50}}]
})
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
// Root Request
app.get('/', function(req, res) {
    Message.find({},function(err,messages){
      if (err) {
        console.log(err);
      }
      else {
        res.render('index', {messages:messages});
      }
    })
})
// Add User Request
app.post('/addMessage', function(req, res) {
  var message = new Message({name:req.body.name, message:req.body.message})
    message.save(function(err){
      if (err) {
        console.log(err);
      }
      else {
        console.log("succesful");
        res.redirect('/');
      }
    });
});
app.post('/message/:id/comment', function(req, res) {
    console.log("POST DATA", req.body);
    Message.update({_id:req.params.id},{$push: {"commenter":req.body.commenter,"comment":req.body.comment}})
    })

app.listen(8000, function() {
    console.log("listening on port 8000");
});
