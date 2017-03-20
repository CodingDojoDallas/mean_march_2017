app.controller('UsersController', ['UserFactory','$location', '$cookies', function(UserFactory, $location, $cookies){
	var self = this;
	self.current_user;
	self.users = [];
	self.newUser = {};
	self.errors = [];

	UserFactory.session(function(res){
		if(res){
			self.current_user = res.data;
		} else {
			self.current_user = {};
			$location.url('/');
		}
	})

	self.index = function(){
		UserFactory.index(function(res){
			self.users = res.data;
		})
	}

	self.logout = function(){
		$cookies.remove('user_id');
		$location.url('/');
	}

	self.login = function(loginUser){
		UserFactory.loginUser(loginUser, function(res){
			if(res.data.errors){
				var errors = res.data.errors;
				for(key in errors){
					self.errors.push(errors[key]['message']);
				}
			} else {
				$location.url('/success')
			}
		})
	}

	self.create = function(newUser){
		self.errors = [];
		UserFactory.create(newUser, function(res){
			if(res.data.code && res.data.code == 11000){
				self.errors.push('Your email must be unique.');
			}
			else if(res.data.errors){
				var errors = res.data.errors;
				for(key in errors){
					self.errors.push(errors[key]['message']);
				}
			} else {
				self.newUser = {};
				$location.url('/');
			}
		})
	}

}])
