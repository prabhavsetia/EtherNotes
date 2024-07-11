const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a user using: POST "/api/auth". Dosent require auth
router.post('/',(req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);
    // res.json([])
})

module.exports = router 
