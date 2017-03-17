console.log("userf")
app.factory('userFactory', [function() {
  function UserConstructor() {

    var users = [{
      name: "mike"
    }];

    function findtype(variable, type) {
      return (typeof variable === type);
    }

    this.index = function(cb) {
      if(!findtype(cb, 'function')) return;

      cb(users);
    };

    this.create = function(newUser, cb) {
      if(findtype(newUser, 'object')) users.push(newUser);

      if(findtype(cb, 'function')) cb(users);
    };
    this.update = function(updateUser, idx, cb) {
      if (users[idx]) {
        for (var key in updateUser) {
          users[idx][key] = updateUser[key];
        }
      }
      if (findtype(cb, 'function')) cb(users[idx]);
    }
    this.show = function(idx, cb) {
      if (findtype(cb, 'function')) cb(users[idx]);
    }
    this.delete = function(idx, cb) {
      if (users[idx]) {
        users.splice(idx, 1);
      }
      if (findtype(cb, 'function')) cb(users);
    }
  }
  return (new UserConstructor());
}]);
