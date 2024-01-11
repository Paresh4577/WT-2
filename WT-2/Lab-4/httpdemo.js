const http = require('http');

const fs = require('fs');
http.createServer((request, response)=> {
  response.writeHead(200, {'Content-Type': 'text/html'});
  
    if(request.url==="/"){
         response.end("</h1>Hello World")
    }
    else if(request.url==="contact"){
      
    }
  
  response.end();

}).listen(3000);