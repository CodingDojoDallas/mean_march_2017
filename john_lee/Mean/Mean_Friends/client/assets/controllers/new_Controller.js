var app = angular.module('app');

app.controller('new_Controller',
  ['$scope','$routeParams','friendsFactory', '$location',
    function($scope,$routeParams, friendsFactory, $location){
      console.log("New Controller is WORKING")

      $scope.create = function(){
        friendsFactory.create($scope.friend, function passedToFriendFactoryUpdate(result){
          console.log("result");
          console.log(result);
          $location.url('/');
        })
      }

      $scope.home = function(){
        $location.url('/');
      }

      }
     //close the function being passed into the controller
  ] // close array of injected services + controller function
); //end the controller function invocation: ()
