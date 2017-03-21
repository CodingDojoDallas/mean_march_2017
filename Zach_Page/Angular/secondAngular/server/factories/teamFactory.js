app.factory("TeamFactory", function(){
   var teams = [
      {name:"Dallas Cowboys"},
      {name:"Denver Broncos"},
      {name:"Philadelphia Beagles"},
      {name:"New York Midgets"}

   ];

   var factory = {};

   factory.getTeams = function(callback){
      callback(teams);
   }

   factory.addTeam = function(team){
      teams.push(team);
   }

   factory.removeTeam = function($index){
      teams.splice(teams.indexOf($index), 1);
   }
   return factory;
})
