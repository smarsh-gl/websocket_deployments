
var Hapi = require("hapi");

var server = new Hapi.Server();


server.connection({
	port:8000
});


server.route({
	method:"GET",
	path:"/",
	handler: function(request, reply) {
		reply.file("./public/index.html");
	}
});

server.start(function() {
	console.log("Hapi server started on port 8000");
});


var app = require('http').createServer()
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8001);

io.on('connection', function (socket) {
  connected(socket);
});


function connected(socket) {
	socket.emit('connected',{message:"I'm still connected"});
	setTimeout(function() {
		connected(socket);
	},1000);
}