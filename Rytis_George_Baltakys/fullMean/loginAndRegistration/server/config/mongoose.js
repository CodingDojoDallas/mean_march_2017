var mongoose = require('mongoose')
var fs = require('fs')

// Use native promises to solve mongoose deprication problem
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/loginAndReg')

var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') != -1) {
		console.log('loading ' + file + '...')
		require(models_path + '/' + file)
	}
})
