var mongoose = require('mongoose');
var Users = require('./../controllers/users.js');
//************RESTful routes for users************

module.exports = function(app){

  app.get('/users', function(req, res) {
    Users.index(req, res);
  });

  app.get('/users/:id', function(req, res) {
    Users.show(req, res);
  });

  app.post('/users', function(req, res) {
    Users.create(req, res);
  });
  app.post('/users/login', function(req, res) {
    users.login(req, res);
  });
  app.put('/users/:id', function(req, res) {
    Users.update(req, res);
  });

  app.delete('/users/:id', function(req, res) {
    Users.delete(req, res);
  });
  app.post('/sessions', Users.login);
}
