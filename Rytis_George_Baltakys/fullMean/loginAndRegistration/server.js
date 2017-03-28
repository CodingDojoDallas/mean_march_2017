var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/bower_components'))
app.use(bodyParser.json())
app.use(session({
	secret: 'manopaslaptispaslaptojikatarinyte',
	resave: false,
	saveUninitialized: true,
	rolling: true
}))

require('./server/config/mongoose')
require('./server/config/routes')(app)

app.listen(8000, function() {
	console.log('listening on port 8000')
})
