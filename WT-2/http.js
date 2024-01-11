//const http = require('http');
//create server
const http1 = require('http');
const event = require("events");

const fs = require('fs');
var variable=0;//
const myevent = new event();

myevent.on("Paresh",()=>{
  variable++;
  console.log(variable);
})
http1.createServer((request, response)=> {

  myevent.emit("Paresh");

  response.writeHead(200, {'Content-Type': 'text/html'});
  
  

    if(request.url==="/Home"){
    let data = fs.readFileSync("Home.html","utf-8");
    console.log(data);
    response.write(data)
    response.end();
   }
    else if(request.url==="/index"){
            let data = fs.readFileSync("index.html","utf-8");
            console.log(data);
            response.write(data)
            response.end();
    }
    else if(request.url==="/about"){
      let data = fs.readFileSync("about.html","utf-8");
      console.log(data);
      response.write(data)
      response.end();
}
    else if(request.url==="/contact"){
        let cdata = fs.readFileSync("Contact.html","utf-8");
       
        console.log(cdata);
        response.write(cdata)
         response.end();
    }
  
  response.end()
}).listen(8081);

 console.log('Server running at localhost:8081/');