
const express = require("express");
const mongoose = require("mongoose");

const Student = require("./modules/Student");
const app=express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Paresh").then(()=>{
console.log("Connected With Atlas");
app.get('/',async (req,res)=>{
    const data = await Student.find();
    res.json(data);
})

app.post('/add',async(req,res)=>{
    const data = req.body;
    const result = await Student.create(data)
    res.json(result);
})

})

app.listen(5000,()=>{
    console.log("Mota Server Chalu Ho!");
})
