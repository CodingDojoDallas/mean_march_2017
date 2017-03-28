app.controller('UsersController', function(UserFactory, $moment, $window){
	var self = this

	self.errors = []
	self.users = []

	self.index = function(){
		UserFactory.index(function(res){
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.users = res.data
			}
		})
	}

	self.create = function(newUser){
		self.errors = []
		UserFactory.create(newUser, function(res){
			if(res.data.code && res.data.code == 11000){
				self.errors.push('The customer name must be unique')
			} else
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.index()
				self.newUser = {}
				self.errors = []
			}
		})
	}

	self.delete = function(id){
		UserFactory.delete(id, function(res){
			self.index()
		})
	}

	self.goBack = function(){
		$window.history.back()
	}
})