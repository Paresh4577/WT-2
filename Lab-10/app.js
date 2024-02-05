
const express = require('express');
const mongoose = require("mongoose");
const Router = express.Router();
const StudentRouter = require('./Routers/Student');
const Student = require("./modules/Student");
const app=express();
app.use(express.json());

app.use("/Student",StudentRouter);
app.post("/add",StudentRouter);
app.put('/Update/:id',StudentRouter);
app.use('/delete',StudentRouter);


mongoose.connect("mongodb://localhost:27017/Paresh").then(()=>{
console.log("Connected With Atlas");
// app.get('/',async (req,res)=>{
   
// })

// app.post('/add',async(req,res)=>{
//     const data = req.body;
//     const result = await Student.create(data)
//     res.json(result);
// })

})

app.listen(5000,()=>{
    console.log("Mota Server Chalu Ho!");
})
