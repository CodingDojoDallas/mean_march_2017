app.factory('DashboardFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/dashboard/5').then(callback)
	}

	return factory
})