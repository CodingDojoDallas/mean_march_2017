var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')

var app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'bower_components')))

app.get('/',function(req,res){
  res.render('index');
})

app.listen(8000, function(){
  console.log('listening on 8000');
});
