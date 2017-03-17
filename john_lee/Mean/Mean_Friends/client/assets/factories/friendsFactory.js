console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        friend = returned_data.data;
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.update = function(id, editedFriend, callback){
      $http.put('/friends/' + id, editedFriend).then(function(returned_data){
          friend = returned_data.data;
          callback(friend);
        });
    };

    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
    };

    this.delete = function(id, callback){
      $http.delete('/friends/'+id).then(function(){
        callback();
      });
    };
    this.show = function(id, callback){
      $http.get('/friends/'+id).then(function(returned_data){
        friend = returned_data.data;
        callback(friend);
      });
    };

    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(id,callback){
      console.log(friend);
      $http.get('/friends/'+id).then(function(returned_data){
        friend = returned_data.data
        callback(friend);
      })
    };
  }
  return new FriendsFactory();
}]);
