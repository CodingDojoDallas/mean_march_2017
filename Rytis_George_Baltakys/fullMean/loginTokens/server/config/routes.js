var Users = require('../controllers/users')

module.exports = function(app){
	app.get('/api/users', Users.index)
	app.post('/api/users', Users.create)
	app.get('/api/users/:id', Users.show)
	app.post('/api/users/:id', Users.update)
	app.post('/api/users/destroy/:id', Users.destroy)
	app.post('/login', Users.login)
	app.post('/logout', Users.logout)	
}