var express = require('express')
var bodyParser = require('body-parser')
var expressJwt = require('express-jwt')

var app = express()

app.use('/api', expressJwt({secret: 'ciamanopaslaptis'}))
app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/bower_components'))
app.use(bodyParser.json())

require('./server/config/mongoose')
require('./server/config/routes')(app)

app.listen(5000, function() {
	console.log('listening on port 5000')
})
