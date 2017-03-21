var mongoose = require('mongoose');
var AnimalSchema = new mongoose.Schema({
 name: String,
 type: String,
 food: String,
 age: Number
})
mongoose.model('Animal', AnimalSchema);
