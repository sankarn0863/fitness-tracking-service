var Models=require("../Models/app");
var express=require("express");
const router=express.Router();
router.get('/get_all_active_users', function (rest) 
{
    Models.User.find({status: true}, (error, document)=>
    {
        if(!error)
        {
            rest.send(document);
        }
        else
        {
            console.log("Error: Something went wrong !"+error);
        }
    })

});
router.get('/get_all_inactive_users', function (rest)
 {
    Models.User.find({status: "Inactive"}, (error, document)=>
    {
        if(!error)
        {
            rest.send(document);
        }
        else
        {
            console.log("Error: Something went wrong ! "+error);
        }
    })

});
router.post('/inactive_user', function (request, rest)
 {
    console.log("Inactive : "+JSON.stringify(req.body));
    Models.User.updateOne({_id:request.body.data._id}, {$set: {status: "InActive"}}, (error, document)=>
    {
        if(!error)
        {
            rest.send(document);
        }
        else
        {
            console.log("Error: Something went wrong ! "+error);
        }
    })

});
router.post('/activeUser', function (request, rest)
 {
    Models.User.updateOne({_id:request.body.data._id}, {$set: {status: true}}, (error, document)=>{
        if(!error)
        {
            rest.send(document);
        }
        else
        {
            console.log("Error: Something went wrong ! "+error);
        }
    })

});