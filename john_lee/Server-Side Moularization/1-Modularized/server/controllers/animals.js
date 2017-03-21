var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports = {
  show: function(req, res) {
    Animal.find({}, function(err, animals) {
      if(err) {
        console.log('something went wrong');
        res.render('index', {animals:[]});
      } else {
        console.log(" we found users");
        res.render('index', {animals:animals});
      }
    })
  },

  matcher: function(req,res){
    Animal.find({_id:req.params.id}, function(err, animals){
      if(err) {
        console.log('something went wrong');
      }
      else {
        res.render('edit', {animal:animals[0]});
      }
    })
  },

  info: function(req,res){
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
  },

  destroy: function(req,res){
    Animal.remove({_id:req.params.id}, function(err, animals){
      if(err) {
        console.log('something went wrong');
      }
      else {
        res.redirect('/');
      }
    })
  },

  addition: function(req,res){
    console.log("POST DATA", req.body);
    var animal = new Animal({name: req.body.name, type: req.body.type, food: req.body.food, age: req.body.age});
    animal.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added an animal!');
        res.redirect('/');
      }
    })
  }


}
