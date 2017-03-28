var express = require('express');

var app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

app.listen(8000, function(){
	console.log('lstening on port 8000...')
})