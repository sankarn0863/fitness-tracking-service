var express=require("express");
var bodyParser=require('body-parser');
var router=require("../Controller/register")
var mongoose=require("../Models/mongoose");
var schema=require("../Models/app");
var cors = require('cors')
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use("../", router);
app.use(mongoose);
app.use("../Models/mongoose",schema);
app.listen(3000, ()=>
{
    console.log("Server is all set and started Running Successfully");
})