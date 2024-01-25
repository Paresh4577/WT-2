const express = require('express');

var data=[
    {id:1,name:"Paresh"},
    {id:2,name:"Rohit"},
    {id:3,name:"Raj"},
    {id:4,name:"Mohit"},
]
const app=express();

app.get('/data/',(req,res)=>{
    res.send(data);
})

app.put('/data/:id/:name',(req,res)=>{
    const id=Number(req.params.id);
    const item=data.find(item=>item.id===id);
    if(item){
       let ex = data.map((e)=>{
           if(e.id==id){
             e.name=req.params.name;
           }
           return e;
           

        })
        res.send(ex);
        
    }
    else{
        res.json("Cannot Find Data!");
    }
})

app.get('/data/:id',(req,res)=>{
    const id=Number(req.params.id);
    const item=data.find(item=>item.id===id);
    if(item){
        res.json(item);
    }
    else{
        res.json("Cannot Find Data!");
    }
})

app.delete("/data/:id",(req,res)=>{
    const id=Number(req.params.id);
    const item=data.find(item=>item.id===id);
    if(item){
        let exp = data.filter(item=>item.id!==id);
        res.json(exp);
    }
    else{
        res.json("Cannot Delete Data!");
    }
})
app.listen(3000,()=>{
    console.log("Started");
});


