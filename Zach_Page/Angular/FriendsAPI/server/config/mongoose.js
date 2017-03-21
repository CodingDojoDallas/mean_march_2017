var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/DBNAMEGOESHERE');// create a variable that points to the path where all of the models live

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
if(file.indexOf('.js') >= 0) {
  require(models_path + '/' + file);
}
});
