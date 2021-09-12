// Requiring the neccesary modules

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors= require('cors');
const bodyParser= require('body-parser')

const app = express();

dotenv.config({ path: './config.env' });

require('./database/connection');

app.use(express.json());

app.use(require('./router/route'));

const port = process.env.PORT || 8000;

const User = require("./models/userSchema");
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Starting the server
app.get('/', (req, res)=>{
    console.log('abcd');
     res.send(`Hello world from server`)
})
app.listen(port, (req, res)=>{
    console.log(`Server is currently running${port}`);
});