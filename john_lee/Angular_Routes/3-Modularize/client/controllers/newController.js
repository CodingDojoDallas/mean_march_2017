console.log("newc")
angular.module('app').controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
  $scope.addUser = function(){
    userFactory.create($scope.user, function (){
      $location.url('/index');
    })
  }
}]);
