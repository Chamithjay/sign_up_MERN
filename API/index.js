var Mongoclient=require('mongodb').MongoClient;
var express=require('express');
var cors=require('cors');
const multer=require('multer');

var app=express();
app.use(cors());

var ConnectionString='mongodb+srv://admin:lxl43Z5ZMK94DCx2@cluster0.7i0ra1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0mongodb://localhost:27017';

var DatabaseName='sign_up';