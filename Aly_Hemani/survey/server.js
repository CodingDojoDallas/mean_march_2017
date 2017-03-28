var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express()

app.use(session({
	secret: 'whatever',
	resave: false,
	saveUninitialized: true,
	rolling: true
}))

app.use(bodyParser.urlencoded({extended: true}));
//tell express where you find your static files
app.use(express.static(__dirname + '/static'));
//tell express where to find our views 
app.set('views', __dirname + '/views')
//tell express to use ejs as the templating engine 
app.set('view engine', 'ejs')

var languages_array = ['Python', 'JavaScript', 'PHP', 'Ruby'];

app.get('/languages', function(req, res){
	req.session.name = 'Aly';
	res.render('index.ejs', {languages: languages_array, user: req.session.name});
})

//body-parser will put all of our form data in req.body
app.post('/languages', function(req, res){
	languages_array.push(req.body.language);
	res.redirect('/languages')

})

app.get('/languages/:id', function(req, res){
	console.log(req.params.id)
	res.render('languages_show', {language: languages_array[req.params.id], user: req.session.name});
})

app.listen(8000, function(){
	console.log('listening on port 8000');
})