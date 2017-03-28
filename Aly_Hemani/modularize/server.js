var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/client/static'));

require('./server/config/mongoose')

require('./server/config/routes')(app)


app.listen(8000, function(){
	console.log('listening on port 8000...')
})