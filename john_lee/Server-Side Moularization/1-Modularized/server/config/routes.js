var animals = require('../controllers/animals.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    animals.show(req, res)
  })

  app.post('/animals/new', function(req, res) {
    res.render('new');
  })

  app.post('/animals/edit/:id', function(req, res) {
    animals.matcher(req, res)
  })

  app.post('/animals/:id', function(req, res) {
    animals.info(req,res)
  })

  app.post('/animals/delete/:id', function(req, res) {
    animals.destroy(req,res)
  })

  app.post('/animals', function(req, res) {
    animals.addition(req,res)
  })
}
