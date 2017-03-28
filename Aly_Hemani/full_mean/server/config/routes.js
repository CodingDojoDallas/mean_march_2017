var Users = require('../controllers/users');

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.get('/users/:id', Users.show);
	app.post('/users/:id', Users.update);
	app.post('/users/destroy/:id', Users.destroy);
}