// Requiring all of my modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

// Creating the app
var app = express();

// Using bodyParser to pass 'html like' code and express.static & path to navigate a filesystem for that code
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));

// Setting the path the to the templates/views and also setting the templating engine to 'ejs'
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Connecting to the Mongodb
mongoose.connect('mongodb://localhost/test');
// Creating Schema for the DB
var AnimalSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
// Making the model from the Schema
var Animal = mongoose.model("Animal", AnimalSchema)

// Setting routes
// this handles the '/' root route
app.get('/', function(req, res){
  Animal.find({},function(err, animals){
    if(err){
      console.log('Error: '+err);
    }
    else {
      // Loading index the page with any animals it finds
      res.render('index.ejs',{animals: animals});

    }
  });
});
// This get shows the single animal page
app.get('/animals/:id',function(req,res){
  Animal.findById(req.params.id, function(err,animal){
    if(err){
      console.log(err);
    }
    else {
      res.render('animal.ejs',{animal:animal});
    }
  });
});
// This get shows the page with the form to create a new animal entry
app.get('/animals/new',function(req,res){
  res.render('addAnimal.ejs');
});
// This get shows the animal update page form
app.get('/animals/edit/:id',function(req,res){
  Animal.findById(req.params.id,function(err,animal){
    if(err){
      console.log(err);
    }
    else {
      res.render('editAnimal.ejs', {animal:animal});
    }
  })
})
// this handles the '/animal/new' post route to create a new entry in the DB
app.post('/animals', function(req,res){
  console.log("POST DATA", req.body);
  // Making the new scheme
  var animal = new Animal({name: req.body.name, age: req.body.age });
  // saving the animal to the DB
  animal.save(function(err, animal){
    // checks for any errors in saving
    if(err){
      console.log('something went wrong');
    }
    else {
      // everyting passed into the DB fine and reroutes to the '/' root
      console.log('Successfully added an animal!');
      res.redirect('/');
    }
  })
});
// This post deletes the document
app.post('/animals/destroy/:id',function(req,res){
  Animal.findById(req.params.id, function(err,animal){
    if(err){
      // Checking for errors in deleting
      console.log('something went wrong');
    }
    else {
      // Delete animal from DB
      animal.remove();
      console.log('Successfully deleted an animal!');
      res.redirect('/');
    }
  })
})
// This post updates the animal from the edit page
app.post('/animals/:id',function(req,res){
  Animal.findById(req.params.id, function(err, animal){
    if (err) {
      console.log(err);
    }
    else {
      animal.name = req.body.name;
      animal.age = req.body.age;
      animal.save();
      res.redirect('/');
    }
  });
});
// Running the server and logging a confirmation
app.listen(8000, function(){
  console.log('listening on 8000...');
});
