console.log("indexc")
angular.module('app').controller('indexController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {

  var usersIndex = function() {
      userFactory.index(function beingPassedToTheFactoryIndexByThisController(factoryUsers) {
        $scope.users = factoryUsers;
      });
    }
  $scope.show = function(user_id) {
      $location.url('/edit/' + user_id);
    }
  console.log("loading the controller");
  console.log(userFactory);
  console.log(this);
  usersIndex();
}]);
