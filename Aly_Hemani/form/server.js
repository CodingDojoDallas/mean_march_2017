var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(session({
	secret: 'whatever',
	resave: false,
	saveUninitialized: true,
	rolling: true
}))

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('index.ejs');
});

app.post('/', function(req, res){
	console.log(req.body);
	res.render('results', {name: req.body.name, location: req.body.location, language: req.body.language, comment: req.body.comment});
});

app.listen(8000, function(){
	console.log('listening on port 8000');
});