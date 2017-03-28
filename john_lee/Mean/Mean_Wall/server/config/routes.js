var mongoose = require('mongoose');
var Users = require('./../controllers/users.js');
var Posts = require('./../controllers/posts.js');
var Comments = require('./../controllers/comments.js');

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.get('/users/:id', Users.show);
	app.post('/users/:id', Users.update);
	app.post('/users/destroy/:id', Users.destroy);
	app.post('/sessions', Users.login);
	app.post('/posts', Posts.create);
	app.get('/posts', Posts.index);
	app.post('/comments', Comments.create);
}
