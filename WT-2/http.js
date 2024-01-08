//const http = require('http');
//create server
const http1 = require('http');

const fs = require('fs');
http1.createServer((request, response)=> {
  response.writeHead(200, {'Content-Type': 'text/html'});
  
    if(request.url==="/"){
            let data = fs.readFileSync("Home.html","utf-8");
            console.log(data);
            response.write(data)
    }
    else if(request.url==="contact"){
        let cdata = fs.readFileSync("Contact.html","utf-8");
        console.log(cdata);
        response.write(cdata)
    }
  
  response.end()

  
    
    
    
  
}).listen(3000);

// console.log('Server running at localhost:8081/');