var Users = require('./../controllers/users.js');

module.exports = function(app){
	app.get('/', Users.index)
	app.get('/new/:name', Users.create)
	app.get('/delete/:name', Users.destroy)
	app.get('/:name', Users.show)
}