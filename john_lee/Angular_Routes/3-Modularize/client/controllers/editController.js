console.log("editc")
app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
  var self = this;

  this.controlValue = "Current Name:";
  this.getUser = function() {
    userFactory.show(rParams.id, function (user) {
      $scope.user = user;
    })
  }

  this.updateUser = function(){
    userFactory.update($scope.users, rParams.id, function (userFromFactory){
      $scope.user = userFromFactory;
      self.controlValue = "Updated Name: "
    });
  }
  this.getUser();
  console.log(this);
}]);
