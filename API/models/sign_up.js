const mongoose=require('mongoose');

const signUp= new mongoose.Schema({
    Fname:String,
    Lname:String,
    Password:String,
    Dob:String
});

const signUpModel=mongoose.model('sign_up',signUp);
module.exports=signUpModel;