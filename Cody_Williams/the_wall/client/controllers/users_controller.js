app.controller('UsersController', function(UserFactory, $location){
	var self = this;

	self.session = function(){
		console.log('invoking session')
		UserFactory.session(function(res){
			console.log(res);
			if(res.data.error){
				console.log('inside controller if')
				$location.url('/')
			} else {
				self.current_user = res.data;
				console.log('CU:', self.current_user);
			}
		})
	}

	self.login = function(loginUser){
		UserFactory.login(loginUser, function(res){
			console.log(res)
			if(!res.data.error){
				self.current_user = res.data;
				$location.url('/wall')
			} else {
				//handle validation errors
			}
		})
	}

})