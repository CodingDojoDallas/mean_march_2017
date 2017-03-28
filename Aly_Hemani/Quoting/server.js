var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/quotes');
console.log('connecting to DB')

var UsersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	quote: {
		type: String,
		required: true,
	}
})

var User = mongoose.model('User', UsersSchema);

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
})

app.get('/quotes', function(req, res){
	User.find({}, function(err, users){
		if(err){
			console.log(err);
		}
		else{
			res.render('quotes', {users: users})
		}
	})
})

app.post('/quotes', function(req, res){
	var user = new User(req.body);
	console.log(req.body);
	user.save(function(err, user){
		if(err){
			console.log(err);
		}
		else{
			console.log(user);
			res.redirect('/quotes')
		}
	})
})

app.listen(8000, function(){
	console.log('listening on port 8000');
})