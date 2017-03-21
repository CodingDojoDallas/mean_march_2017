app.controller("TeamsController", function($scope, TeamFactory){
   $scope.teams = [];

   TeamFactory.getTeams(function(teams){
      $scope.teams = teams;
   })

   $scope.addTeam = function(){
      TeamFactory.addTeam($scope.Team)
      $scope.newTeam = {};
   }

   $scope.removeTeam = function($index){
      TeamFactory.removeTeam($index);
   }
})
