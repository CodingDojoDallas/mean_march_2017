app.config(function($routeProvider){
    $routeProvider
    .when('/teams', {
      templateUrl: 'partials/teams.html'
    })
    .when('/associations', {
      templateUrl: 'partials/associations.html'
    })
    .when('/players', {
      templateUrl: 'partials/players.html'
    })
    .otherwise({
      templateUrl: 'partials/players.html'
    })
})
