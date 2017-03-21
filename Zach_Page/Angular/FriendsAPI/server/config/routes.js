var friends = require('../controllers/friends');

module.exports = function(app){
app.get('/friends', friends.index);
app.post('/friends', friends.create);
app.get('/friends/:id',friends.show);
app.post('/friends/:id',friends.update);
app.post('/friends/destroy/:id',friends.delete);
};
