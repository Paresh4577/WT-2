const express = require('express');
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.json());

app.listen(8081,()=>{
    console.log("Started");
});