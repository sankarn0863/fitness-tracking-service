var Models=require("../Models/app");
const router=express.Router();
{
router.get('/get_all_requests', function (request, rest)
 {
    Models.Friends.find((error, document)=>
    {
        if(!error)
        {
            rest.send(document);
        }
        else
        {
            console.log("Error:Something went wrong "+error);
        }
    })

});
router.post('/get_individual_requests', function (request, rest) 
{
   Models.Friends.find({To:request.body.id, status: false}, (error, document)=>
    {
    if(!error)
    {
    rest.send(document);
    }
    else
    {
    console.log("Error:Something went wrong "+error);
    }
}
)
});
router.post('/request_accept', function (request, rest)
 {
    Models.Friends.updateOne({_id:request.body.id}, {$set: {status: true}}, (error)=>
    {
        if(!error)
        {
            console.log("Accepted");
            rest.redirect('/get_individual_requests');
        }
        else{
            console.log("Error:Something went wrong! "+error);
        }
    })

});
router.post('/request_decline', function (request, rest) {
    Models.Friends.updateOne({_id:request.body.id}, {$set: {status: "reject"}}, (error)=>
    {
        if(!error){
            res.redirect('/get_individual_Requests');
        }else
        {
            console.log("Error:Something went wrong "+error);
        }
    })

});
router.post("/deactivated_post", function(request, rest)
{
  Models.Uploads.updateOne({_id:request.body.data._id}, {$set: {status: "InActive"}}, (error, document)=>
  {
      if(!error)
      {
          console.log("Deactivated");
          rest.send(document);
      }
      else
      {
          console.log("Error:Something went wrong!"+error);
      }
  })
});
router.post("/activate_post", function(request, rest)
{
Models.Uploads.updateOne({_id:request.body.data._id}, {$set: {status: true}}, (error, document)=>
{
    if(!error)
    {
        console.log("Activated");
        rest.send(document);
    }
    else
    {
        console.log("Error: Something went wrong!"+error);
    }
})
});
router.post("/remove_Post", function(request, rest)
{
Models.Uploads.remove({_id:request.body.data._id}, (error, document)=>
{
    if(!error)
    {
        console.log("Removed");
        rest.send(document);
    }
    else
    {
        console.log("Error: Something went wrong!"+error);
    }
})
})
}
