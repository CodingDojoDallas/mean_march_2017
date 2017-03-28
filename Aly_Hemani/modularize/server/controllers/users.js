var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res){
		User.find({}).populate('posts').exec(function(err, users){
			if(err){
				console.log(err);
			}
			else{
				res.render('index.ejs', {users:users});
			}
		})
	}
}