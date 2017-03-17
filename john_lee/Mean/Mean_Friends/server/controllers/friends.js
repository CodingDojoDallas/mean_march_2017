var mongoose = require('mongoose')
var Friend = mongoose.model('Friend');

module.exports = {

  index: function(req,res){
    Friend.find({}, function(err, result){
      if(err){
        console.log(err)
      }
      else{
        res.json(result);
      }
    })
  },

  create: function(req,res){// might be wrong here
    var friend = new Friend({firstname: req.body.firstname,lastname: req.body.lastname,birthday: req.body.birthday})
    Friend.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        res.json(result)
      }
    })
  },

  update: function(req,res){
    Friend.findById(req.params.id, function(err, friend){
      if(err){
        console.log(err);
      }else{
        console.log("Friend Before", friend)
        friend.firstname = req.body.firstname;
        friend.lastname = req.body.lastname;
        friend.birthday = req.body.birthday;
        console.log("Friend After", friend)
        friend.save(function(err){
          if (err){
            console.log(err);
          }else{
            res.json(friend);
          }
        })
      }
    })
  },

  delete: function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Friend deleted!"});
      }
    })
  },
  show: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, result){
      if(err){
        console.log(err)
      }
      else{
        res.json(result);
      }
    })
  },
}
