const mongoose = require('mongoose');
var express=require('express');
var cors=require('cors');
const signUpModel = require('./models/sign_up');


var app=express();
app.use(express.json());
app.use(cors());

var ConnectionString='mongodb+srv://admin:lxl43Z5ZMK94DCx2@cluster0.7i0ra1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(ConnectionString);

app.post('',(req,res)=>{
    signUpModel.create(req.body)
    .then(sign_up=>res.json(sign_up))
    .catch(err=>res.json(err));
        
});

app.listen(3001,()=>{
    console.log('Server is running on port ');
});