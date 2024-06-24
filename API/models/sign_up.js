const mongoose=require('mongoose');

const signUpSchema= new mongoose.Schema({
    Fname:String,
    Lname:String,
    Password:String,
    Dob:String
});

const signUpModel=mongoose.model('sign_up',signUpSchema);
module.exports=signUpModel;