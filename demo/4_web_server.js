// curl http://localhost:8000
// curl -i http://localhost:8000   #<- show connection and encoding
var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('hello world\n');  
});

server.listen(8000);


