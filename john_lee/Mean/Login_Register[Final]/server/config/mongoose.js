var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

var reg = new RegExp( ".js$", "i" );

var dbURI = 'mongodb://localhost/login_register';

mongoose.connect( dbURI );

var models_path =path.join( __dirname , '/../models');

console.log('Models = ' + models_path);

mongoose.connection.on( 'connected', function () {
  console.log( `Mongoose default connection open to ${ dbURI }` );
  console.log('we are connected');
});
/*
*  If the connection throws an error
*/
mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});
/*
*  When the connection is disconnected
*/
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});
/*
*  If the Node process ends, close the Mongoose connection
*/
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
});

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    console.log('model was required');
    require(models_path + '/' + file);
  }
})
