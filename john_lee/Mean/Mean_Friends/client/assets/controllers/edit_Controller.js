var app = angular.module('app');

// To hit this controller and partial, try going to 'http://localhost:8000/#/edit/imatest'
// to see $routeParams update with a new _id property

app.controller('edit_Controller',
  ['$scope','$routeParams','$location','friendsFactory',
    function($scope, $routeParams, $location, friendsFactory){

      var getFriend = function(){
        friendsFactory.getFriend($routeParams._id, function(factoryData){
          var date = new Date(factoryData.birthday);
          factoryData.birthday = date;
          $scope.friend = factoryData;
        });
      }

      $scope.updateFriend = function() {
        console.log($scope.friend)
        friendsFactory.update($routeParams._id,$scope.friend, function(returnedData) {
          var date = new Date(returnedData.birthday);
          returnedData.birthday = date;
          $scope.friend = returnedData;
          $location.url('/');
        });
      }

      $scope.home = function(){
        $location.url('/');
      }

      getFriend();

    } //close the function being passed into the controller
  ] // close array of injected services + controller function
); //end the controller function invocation: ()
