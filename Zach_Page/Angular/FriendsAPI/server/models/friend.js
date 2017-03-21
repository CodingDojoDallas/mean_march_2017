var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({
  name: String,
  favoriteLanguage: String,
});

var Friend = mongoose.model("Friend", FriendsSchema)
