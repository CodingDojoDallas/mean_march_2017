var app = angular.module("myApp", ["ngRoute"]);

app.factory("PlayerFactory", function(){
   var players = [
      {name:"Zach", team:"Dallas Cowboys"},
      {name:"Will", team:"Denver Broncos"},
      {name:"Adam", team:"Philadelphia Beagles"},
      {name:"David", team:"New York Midgets"}
   ];

   var factory = {};

   factory.getPlayers = function(callback){
      callback(players);
   }

   factory.addPlayer = function(player){
      player.team = "";
      players.push(player);
   }

   factory.removePlayer = function($index){
      players.splice($index, 1);
   }

   factory.addPlayerToTeam = function(data){
      players[data.playerIdx].team = data.team;

   }

   factory.removePlayerFromTeam = function($index){
      players[$index].team = "";
   }
   return factory;
})
