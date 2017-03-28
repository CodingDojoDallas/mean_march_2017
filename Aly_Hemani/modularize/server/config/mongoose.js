var mongoose = require('mongoose');
var fs = require('fs');

var models_path = __dirname + '/../models';

mongoose.connect('mongodb://localhost/modules')

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') != -1){
		require(models_path + '/' + file);
	}
})