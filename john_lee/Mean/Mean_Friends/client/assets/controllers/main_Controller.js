var app = angular.module('app');

app.controller('main_Controller',
  ['$scope','$routeParams','friendsFactory', '$location',
    function($scope, $routeParams, friendsFactory, $location){
      var index = function(){
        console.log('FF: ', friendsFactory);
        friendsFactory.index(function(returnedData){
          $scope.friends = returnedData;
        });
      };

       $scope.sortType = 'lastname';
       $scope.sortReverse = false;

         /* Scope Methods */
       $scope.show = function(friend_id) {
           $location.url('/show/' + friend_id);
         }

       $scope.edit = function(friend_id) {
           $location.url('/edit/' + friend_id);
         }

       $scope.delete = function(friend_id){
            friendsFactory.delete(friend_id, function(){
            $location.url('/index');
         });
       }
      index();
}]);
