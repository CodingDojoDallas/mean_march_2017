var Users = require('../controllers/users')
var Products = require('../controllers/products')
var Orders = require('../controllers/orders')
var Dashboard = require('../controllers/dashboard')

module.exports = function(app){
	app.get('/users', Users.index)
	app.post('/users', Users.create)
	app.delete('/users/:id', Users.delete)
	app.get('/products', Products.index)
	app.post('/products', Products.create)
	app.delete('/products/:id', Products.delete)
	app.get('/orders', Orders.index)
	app.get('/orders/:limit', Orders.indexLimit)
	app.post('/orders', Orders.create)
	app.delete('/orders/:id', Orders.delete)
	app.get('/dashboard/:limit', Dashboard.index)
}
