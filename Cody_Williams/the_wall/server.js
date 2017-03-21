var express = require('express');
var bp = require('body-parser');
var session = require('express-session');

var app = express();

app.use(session({
	secret: 'someSecretTokenHere',
	resave: false,
	saveUninitialized: true,
	rolling: true
}))
app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/bower_components'));
app.use(bp.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, function(){
	console.log('listening on port 8000...');
})
