app.controller("AssociationsController", function($scope, PlayerFactory, TeamFactory){
   $scope.players = [];
   $scope.teams = [];

   PlayerFactory.getPlayers(function(players){
      $scope.players = players;
   })

   TeamFactory.getTeams(function(teams){
      $scope.teams = teams;
   })

   $scope.addPlayerToTeam = function(){
      PlayerFactory.addPlayerToTeam($scope.newAss);
   }

   $scope.removePlayerFromTeam = function($index){
      PlayerFactory.removePLayerFromTeam($index);
   }
})
