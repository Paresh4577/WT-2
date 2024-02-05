const mongoose = require("mongoose");


 const Schema = mongoose.Schema({
    "st_name":String,
    "st_enroll":String
 })

 module.exports = mongoose.model("Student",Schema);