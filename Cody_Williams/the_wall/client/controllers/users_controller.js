app.controller('UsersController', function(UserFactory, $location){
	var self = this;
	self.registrationErrors = [];

	self.session = function(){
		UserFactory.session(function(res){
			if(res.data.error){
				$location.url('/');
			} else {
				self.current_user = res.data;
			}
		})
	}

	self.login = function(loginUser){
		self.registrationErrors = [];
		UserFactory.login(loginUser, function(res){
			if(!res.data.error){
				self.current_user = res.data;
				$location.url('/wall');
			} else {
				self.registrationErrors.push(res.data.error);
			}
		})
	}

})