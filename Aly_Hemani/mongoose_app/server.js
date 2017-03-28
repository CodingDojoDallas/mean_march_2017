var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/testing_mongo');
console.log('connecting to DB')

var UsersSchema = new mongoose.Schema({
	name : {
		type: String,
		required: true,
	},
	email : {
		type: String,
		required: true,
		unique: true,
	}
})

var User = mongoose.model('User', UsersSchema);

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	User.find({}, function(err, users){
		if(err){
			console.log(err);
		}
		else{
			res.render('index', {users: users})
		}
	})
})

app.get('/users/:id', function(req, res){
	User.findById({_id: req.params.id}, function(err, user){
		if(err){
			res.render('users_show', {user: {name: 'User not found'}});
		}
		else{
			res.render('users_show', {user: user});
		}
	})
})

app.post('/users', function(req, res){
	var user = new User();
	user.name = req.body.name;
	user.email = req.body.email;
	user.save(function(err, user){
		if(err){
			console.log(err);
		}
		else{
			console.log(user);
			res.redirect('/')
		}
	})
})

app.listen(8000, function(){
	console.log('listening on port 8000')
})