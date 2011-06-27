// curl -i http://localhost:8000   #<- show connection and type chink
// show in 2 consoles - not a sleep
// ab -n 100 -c 100 http://127.0.0.1:8000/

var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write("hello\n");

  setTimeout(function(){
    res.end('world\n');
  }, 3000);
});

server.listen(8000);


