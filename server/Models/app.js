var mongoose=require("mongoose");
var User_Details=new mongoose.Schema
var User_activities=mongoose.model("User_activities", User_Details);
var Upload=mongoose.model("Upload", upload);
var Friend_List=mongoose.model("Friend_List", Friend_List);
module.exports={User_activities, Upload, Friend_List};
 ({
    Username:{type: String, unique: true},
    MailID:{type: String, unique: true},
    Name:{type: String},
    Weight:{type: String},
    PhoneNo:{type: String, unique: true},
    City: {type: String},
    State:{type: String},
    Country:{type: String},
    Passcode:{type: String}    
   });

var upload=new mongoose.Schema
 ({
    From:{type: String},
    upload_Name:{type: String},
    Title:{type: String},
    File:{type: String},
    Time:{type: String},
    status:{type: String}
 });
var Friend_List=new mongoose.Schema({
    From:{type: String},
    To:{type: String},
    status:{type: String},
    FromName:{type: String},
    FromUserName:{type: String},
    FromEmailID:{type: String},
    FromPhoneNo: {type: String},
    ToName:{type: String},
    ToUserName:{type: String},
    ToEmailID:{type: String},
    ToPhoneNo: {type: String},
});
