const express = require("express");
const mongoose = require("mongoose");
const meetingsData = require("./dataSchema");
const cors = require('cors');

const app = express();
const conStr = "mongodb+srv://paresh_mori_67:Paresh%404577@paresh.xmqiuhh.mongodb.net/MeetingDB";

  app.use(express.json());
  app.use(cors());
 
mongoose.connect(conStr).then(() => {
  console.log("Connected With Atlas");

  app.get("/Meetings/", async (req, res) => {
    await meetingsData.find().then((data) => {
      res.json(data);
    });
  });

  app.post("/add",  (req, res) => {
    const formData = {
      MeetingID: req.body.MeetingID,
      OrganizerName: req.body.OrganizerName,
      ParticipantName: req.body.ParticipantName,
      Date: req.body.Date,
      Time: req.body.Time,
    };
    res.send(formData);
    
    meetingsData.insertMany(formData)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  });


  app.get("/:MeetingID", async(req,res)=>{
   await meetingsData.findOne({MeetingID:req.params.MeetingID})
    .then((data)=>{
       res.json(data);
    })
  })

  app.delete("/:MeetingID", async(req,res)=>{
    await meetingsData.deleteOne({MeetingID:req.params.MeetingID});
    res.send("delete successfully.... thank you");
  })


  app.put("/:MeetingID" , async(req,res)=>{
    await meetingsData.updateOne({MeetingID:req.params.MeetingID},{$set:{
      MeetingID:req.body.MeetingID,
      OrganizerName:req.body.OrganizerName,
      ParticipantName:req.body.ParticipantName,
      Date:req.body.Date,
      Time:req.body.Time}
    });
    res.send();
    // res.send("update successfully.... thank you");
  })



});

app.listen(5000, () => {
  console.log("App Listening on Port 5000");
});
