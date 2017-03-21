// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Require Mongoose
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "mongoose_dashboard" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/mongoose_dashboard');
//
mongoose.Promise = global.Promise;
//
var AnimalSchema = new mongoose.Schema({
 name: String,
 type: String,
 food: String,
 age: Number
})
mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'User'

// Routes
// Root Request
app.get('/', function(req, res) {
  Animal.find({}, function(err, animals) {
    // This is the method that finds all of the users from the databasex
    // Notice how the first parameter is the options for what to find and the second is the
    //   callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    //   happen inside of this callback for it to be synchronous
    // Make sure you handle the case when there is an error, as well as the case when there is no error
    if(err) {
      console.log('something went wrong');
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      res.render('index', {animals:[]});
    } else { // else console.log that we did well and then redirect to the root route
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      console.log(" we found users");
      res.render('index', {animals:animals});
    }
  })
})

app.post('/animals/new', function(req, res) {
  res.render('new');
})

app.post('/animals/edit/:id', function(req, res) {
  Animal.find({_id:req.params.id}, function(err, animals){
    if(err) {
      console.log('something went wrong');
    }
    else {
      res.render('edit', {animal:animals[0]});
    }
  })
})

app.post('/animals/:id', function(req, res) {
  Animal.find({_id:req.params.id}, function(err, animals){
    if(err) {
      console.log('something went wrong');
    }
    else {
      animals[0].name = req.body.name;
      animals[0].type = req.body.type;
      animals[0].food = req.body.food;
      animals[0].age = req.body.age;
      animals[0].save(function(err, animals){
        if(err) {
          console.log('something went wrong');
        }
        else {
          res.redirect('/');
        }
      })
    }
  })
})

app.post('/animals/delete/:id', function(req, res) {
  Animal.remove({_id:req.params.id}, function(err, animals){
    if(err) {
      console.log('something went wrong');
    }
    else {
      res.redirect('/');
    }
  })
})

// Add User Request
app.post('/animals', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var animal = new Animal({name: req.body.name, type: req.body.type, food: req.body.food, age: req.body.age});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  animal.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added an animal!');
      res.redirect('/');
    }
  })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
