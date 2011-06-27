//telnet localhost 8000
//nc localhost 8000

var net = require('net');

var server = net.createServer(function(socket){
  socket.write("hello\n");
  socket.end('world\n');
});

server.listen(8000);