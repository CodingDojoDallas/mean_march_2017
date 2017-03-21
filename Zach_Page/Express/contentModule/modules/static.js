var fs = require('fs');
var path = require('path');

module.exports = function(request, response){
  fs.exists('.'+request.url, function(exists){
    if(exists){
      if(request.url === '/'){
        fs.readFile('views/index.html', 'utf-8', function(errors,contents){
          response.write(contents);
          response.end();
          console.log('/');
        });
      }
      else if(request.url === 'stylesheets/style.css'){
        fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
          response.write(contents);
          response.end();
          console.log('style');
        })
      }
      else {
        response.writeHead(404);
        response.end('File not found!');
      }
    }
  })
}
