var Users = require('../controllers/users');
var Posts = require('../controllers/posts');
var Comments = require('../controllers/comments');


module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.post('/sessions', Users.login);
	app.get('/sessions', Users.session);
	app.post('/posts', Posts.create);
	app.get('/posts', Posts.index);
	app.post('/comments', Comments.create);
}
