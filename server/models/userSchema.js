// Requiring the modules

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName:{
        type : String,
        required : true
    },
    lastName :{
        type : String,
        required : true
    },
    phone :{
        type : String,
        required : true
    },
    address :{
        type : String,
        required : true
    },
    batch :{
        type : String,
        required : true
    },
    age :{
        type : Number,
        required : true
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;