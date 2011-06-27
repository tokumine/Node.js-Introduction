//telnet localhost 8000
//nc localhost 8000

var net = require('net');
var sockets = [];

var server = net.createServer(function(socket){
  sockets.push(socket);
  
  socket.on('data', function(data){
    for(var i = 0; i < sockets.length; i++){
      sockets[i].write(data);
    }
  });
  
  socket.on('end', function(){
    var i = sockets.indexOf(socket);
    sockets.sliceAt
    delete sockets[i];
  })
});

server.listen(8000);