const express = require('express');
const router = express.Router();
const Student = require('../modules/Student');


router.get('/',async(req,res)=>{
    const data = await Student.find();
    res.json({data:data,message:"Using Routes"});
})

router.post('/add',async(req,res)=>{
    const data = req.body;
    const addData = await Student.create(data)
    res.json(addData);
})

router.put('/Update/:id',async(req,res)=>{
    const data = req.body;
    const updatedata = await Student.findByIdAndUpdate({_id:req.params.id},data);
    res.json(updatedata);
})

router.delete('/:id',async(req,res)=>{
    const Deletedata = await Student.deleteOne({_id:req.params.id});
    res.json(Deletedata);
})


module.exports=router;