const express = require('express');
const bodyParser = require("body-parser");
const routerStudent = require('./student');
const routeradmin = require('./admin');
const routerfaculty = require('./faculty');
const app=express();
app.use("/student",middleware,routerStudent);
app.use("/admin",middleware,routeradmin);

// app.use(bodyParser.json());
// app.get('/:id',(req,res)=>{
//      const id = req.params.id;
// })
function middleware(req,res,next)
{
    const {user_name}= req.body;
    if(true){
        next();
    }
    else{
        res.json('user name is not darshan');
    }
}

// app.post('/',middleware,(req,res)=>{
// res.json("Hello World");
// })




// app.use("/student",middleware,routerStudent);
// app.use("/admin",middleware,routeradmin);
// app.use("/faculty",middleware,routerfaculty);


app.listen(8000,()=>{
    console.log("Started");
});