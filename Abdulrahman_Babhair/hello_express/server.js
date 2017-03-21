var express = require('express')

var app = express();

var session = require('express-session')
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
	secret: 'someStringYouMakeUp',
	resave: false,
	saveUninitialized: true,
	rolling: true
}))

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

var users_array = [
		{name:'Abdul', age: 32},
		{name:'Hadeel', age: 28},
		{name:'Amal', age: 1}
]

app.get('/users', function(reqest, response){
	reqest.session.name = "someone"
	response.render('users', {users: users_array, logged: reqest.session.name});
})

app.post('/users', function(reqest, response){
	users_array.push(reqest.body)
	console.log(reqest.body)
	response.redirect('/users')
})

app.get('/users/:id', function(reqest,response){
	response.render('show', {user: users_array[reqest.params.id], logged: reqest.session.name});
})




app.listen(8000, function(){
	console.log('listening on 8000...')
})