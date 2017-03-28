app.controller('DashboardController', function(DashboardFactory){
	var self = this

	self.errors = []
	self.products = []
	self.orders = []
	self.users = []

	self.index = function(){
		DashboardFactory.index(function(res){
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.products = res.data.products
				self.orders = res.data.orders
				self.users = res.data.users
				console.log(self.products)
			}
		})
	}
})