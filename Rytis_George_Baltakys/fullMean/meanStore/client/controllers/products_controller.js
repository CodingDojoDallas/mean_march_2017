app.controller('ProductsController', function(ProductFactory){
	var self = this

	self.errors = []
	self.products = []

	self.index = function(){
		ProductFactory.index(function(res){
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.products = res.data
			}
		})
	}

	self.create = function(newProduct){
		self.errors = []
		ProductFactory.create(newProduct, function(res){
			if(res.data.code && res.data.code == 11000){
				self.errors.push('The product must be unique')
			} else
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.index()
				self.newProduct = {}
				self.errors = []
			}
		})
	}

	self.delete = function(id){
		ProductFactory.delete(id, function(res){
			self.index()
		})
	}
})