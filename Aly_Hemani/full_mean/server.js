var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/full_mean')

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

require('./server/config/mongoose.js');
require('./server/config/routes')(app);

app.listen(8000, function(){
	console.log('listening on port 8000...')
})