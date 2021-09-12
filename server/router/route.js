// Requiring the modules
 
const express = require("express");
const router = express.Router();

require('../database/connection');
const User = require("../models/userSchema");
const { json } = require("body-parser");

router.post('/register', async(req, res)=>{

    const {firstName,lastName,phone,address,batch,age} = req.body;
    try {
            const user = new User({firstName,lastName,phone,address,batch,age});

            await user.save();
            res.status(201).json({message : "Successfully Registered"});
    } 
    catch (error) {
        console.log(error);
    }
});

module.exports = router;