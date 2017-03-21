var express = require('express')

var app = express();

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

var dojo_array = [];

app.get('/', function(req, res){
	res.render('main')
})

app.post('/', function(req, res){
	dojo_array.push(req.body)
	console.log(req.body)
	res.render('result', {dojo: dojo_array})
})

app.listen(8000, function(){
	console.log('listening on 8000...')
})