var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/bower_components'))

app.set('views', __dirname + '/views')

app.set('view engine', 'ejs');

var messages = []

app.get('/', function(req, res){
	res.render('index', {messages: messages})
})

var server = app.listen(8000, function(){
	console.log('listening on port 8000')
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log('new socket connection');
	console.log('socket id:', socket.id);
	socket.on('newMessage', function(data){
		messages.push(data);
		io.emit('updateChatBox', data);
	})
})