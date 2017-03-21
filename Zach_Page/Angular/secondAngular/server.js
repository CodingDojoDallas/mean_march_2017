var express = require('express')
var path = require('path')

var app = express();

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/bower_components')));
app.use(express.static(path.join(__dirname, '/server')));


app.listen(8000, function(){
  console.log("Listening on 8000...");
});
