var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'))

app.set('views', __dirname + '/views')

var server = app.listen(8000, function(){
	console.log("Listening on port 8000");
})