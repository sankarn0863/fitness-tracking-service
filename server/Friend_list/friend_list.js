var Models=require("../Models/app");
const router=express.Router();
router.post('/add_friend', function (request, rest) 
   {
     var friends=new Models.Friends();
     friends.From=request.body.userData._id;
     friends.To=request.body.data._id;
     friends.status=false;
     friends.FromName=request.body.userData.Name;
     friends.FromUserName=request.body.userData.UserName;
     friends.FromEmailID=request.body.userData.EmailID;
     friends.FromPhone= request.body.userData.Phone;
     friends.ToName=request.body.data.Name;
     friends.ToUserName=request.body.data.UserName;
     friends.ToEmailID=request.body.data.EmailID;
     friends.ToPhone= request.body.data.Phone;
     friends.save((error)=>
     {
     if(!error)
     {
       rest.send
         ({
             "statusCode":325,
             "msg":"Requested Successfully"
         });
     }
     else
     {
         console.log("Something went Wrong!"+error);
     }
 })
 
 });
router.post('/get_individual_FriendsList', function (request, rest)
{
  Models.Friends.find({ $or: [ { To:request.body.id  }, { From:request.body.id  } ] }, (error, document
    )=>{
         if(!error)
         {
           var data=[];
           for(var i=0;i<document.length;i++)
           {
             if(document[i].status=="true"){
                     data.push(document[i]);
            }
          }
         rest.send(data);
         }
         else
         {
           console.log("Error:Something went wrong!: "+error);
         }
     })
  });
 router.post('/all_user_data', function (request, rest)
  {
    Models.User.find({_id: { $nin: request.body.id }}, (error, document)=>
    {
     if(!error){
     rest.send(document);
    }
    else
     {
       console.log("Error:Something went wrong! "+error);
     }
 })
});