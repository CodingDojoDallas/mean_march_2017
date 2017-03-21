var quotes = require('../controllers/quotes.js')
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index')
	})

	app.post('/quotes', function(req, res) {
		quotes.create(req, res)
	})

	app.get('/quotes', function(req, res) {
		quotes.show(req, res)
	})

	app.get('/quotes/destroy/:id', function(req, res) {
		quotes.destroy(req, res)
	})

	app.get('/quotes/like/:id', function(req, res) {
		quotes.like(req, res)
	})
}