const express = require('express');
const router = express.Router();
router.get('/faculty',(req,res)=>{
    res.send("Hello faculty");
})
module.exports = router;