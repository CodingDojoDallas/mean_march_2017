var app = angular.module('myApp',[]);

app.controller('DataController', function($scope){
  console.log('loaded');
  $scope.data = "data";
})
