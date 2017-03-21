var mongoose = require('mongoose')
var Friend = mongoose.model('Friend');
module.exports = {
  index: function(req,res){
    Friend.find({}).exec(function(err,doc){
      if (err) {
        return res.json(err)
      }
      return res.json(doc);
    })
  },
  create: function(req,res){
    var friend = new Friend(req.body);
    friend.save(function(err,doc){
      if (err) {
        return res.json(err)
      }
      return res.json(doc);
    })
  },
  show: function(req,res){
    User.findByID(req.params.id).exec(function(err,doc){
      if (err) {
        return res.json(err)
      }
      return res.json(doc);
    })
  },
  update: function(req,res){
    User.findByID(req.params.id).exec(function(err,doc){
      if (err) {
        return res.json(err)
      }
      doc.name = req.body.name;
      doc.favoriteLanguage = req.body.favoriteLanguage;
      doc.save(function(err,doc){
            if (err) {
              return res.json(err)
            }
            return res.json(doc);
          })
    })
  },
  delete: function(req,res){
    Friend.findByIDAndRemove(req.params.id).exec(function(err,doc){
      if (err) {
        return res.json(err)
      }
      return res.json(doc);
    })
  },
}
