app.controller('OrdersController', function(OrderFactory){
	var self = this

	self.errors = []
	self.orders = []

	self.index = function(){
		OrderFactory.index(function(res){
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.orders = res.data
			}
		})
	}

	self.create = function(newOrder){
		console.log(newOrder)
		self.errors = []
		OrderFactory.create(newOrder, function(res){
			if(res.data.code && res.data.code == 11000){
				self.errors.push('The order must be unique')
			} else
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.index()
				self.newOrder = {}
				self.errors = []
			}
		})
	}

	self.delete = function(id){
		OrderFactory.delete(id, function(res){
			self.index()
		})
	}
})