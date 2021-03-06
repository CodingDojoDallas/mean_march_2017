var Users = require('../controllers/users');
var Posts = require('../controllers/posts');
var Comments = require('../controllers/comments');

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.get('/users/:id', Users.show);
	app.post('/users/:id', Users.update);
	app.post('/users/destroy/:id', Users.destroy);
	app.post('/sessions', Users.login);
	app.post('/posts', Posts.create);
	app.post('/comments', Comments.create);
	app.get('/posts', Posts.index);
}
