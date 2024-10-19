const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

const PORT = process.env.PORT || 5000;

// MiddleWare 
app.use(bodyParser.json());

// Connect MongoDB

mongoose.connect('mongodb://localhost:27017/blog')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('DB error',err));



// sample 
app.get('/',(req,res)=>{
    res.send('Hello World')
})





app.listen(PORT, ()=> console.log( `server is Running on ${PORT}`))

