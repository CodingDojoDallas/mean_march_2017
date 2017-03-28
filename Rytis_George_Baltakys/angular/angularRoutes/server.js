var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require("mongoose")

var app = express()

app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/bower_components'))

app.listen(5000, function() {
	console.log("listening on port 5000");
})