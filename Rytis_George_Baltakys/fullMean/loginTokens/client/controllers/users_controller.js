app.controller('UsersController', function(UserFactory, $location){
	var self = this
	self.users = []
	self.errors = []
	self.loginUser = {}

	self.index = function(){
		UserFactory.index(function(res){
			self.users = res.data
		})
	}

	self.login = function(loginUser){
		self.errors = []
		UserFactory.login(loginUser, function(res){
			if(res.data.errors) {
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else { // log user in
				$location.url('/success')
			}
		})
	}

	self.logout = function(){
		UserFactory.login(function(res){
			$location.url('/')
		})
	}

	self.create = function(newUser){
		self.errors = []
		UserFactory.create(newUser, function(res){
			if(res.data.code && res.data.code == 11000){
				self.errors.push('Your email must be unique')
			} else
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else { // log user in
				$location.url('/success')
			}
		})
	}
})