const mongoose = require('mongoose');
var express=require('express');
var cors=require('cors');
const signUpModel = require('./models/sign_up');
require('dotenv').config();


var app=express();
app.use(express.json());
app.use(cors());

var ConnectionString=process.env.CONNECTION_STRING
mongoose.connect(ConnectionString);

app.post('',(req,res)=>{
    signUpModel.create(req.body)
    .then(sign_up=>res.json(sign_up))
    .catch(err=>res.json(err));
        
});

app.listen(3001,()=>{
    console.log('Server is running on port ');
});