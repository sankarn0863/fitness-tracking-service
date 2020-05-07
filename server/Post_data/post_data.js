var Models=require("../Models/app");
const router=express.Router();
router.get('/get_all_posts', function (rest) 
{
    Models.Uploads.find({status: true}, (error, document)=>
    {
       if(!error)
       {
            rest.send(document);
        }
        else
        {
            console.log("Something went wrong"+error);
        }
    })
  });
  router.get('/get_all_inactive_posts', function (rest) 
  {
    Models.Uploads.find({status:"InActive"}, (error, document)=>
    {
        if(!error)
        {
            rest.send(document);
        }
        else
        {
            console.log("Something went wrong"+error);
        }
    })
  });
router.post('/get_individual_post', function (request, rest) 
{
console.log("request: "+JSON.stringify(req.body));
Models.Friends.find({ $or: [ { To:req.body._id  }, { From:request.body._id  } ] }, (error, document)=>
{
 if(!error)
 {
 var data=[];
            for(var i=0;i<document.length;i++)
            {
                if(document[i].status=="true")
                {
                    data.push(document[i].From);
                    data.push(document[i].To);
                }
            }
           var uniqueItems = Array.from(new Set(data))
           var postData=[];
           if(data=="")
           
            uniqueItems=[request.body._id];
           }
           for(var i=0;i<uniqueItems.length;i++)
           {
            console.log("Id: "+uniqueItems[i]);
            Models.Uploads.find({From:uniqueItems[i]}, (error, result)=>
            {
                if(!error)
                {
                    if(result!='')
                    {
                        postData.push(result);
                    }
                }
                else
                {
                    console.log("Error"+ error);
                }
            });
           }
           setTimeout(function()
           { 
            console.log("FinalData: "+postData);
            rest.send(postData);
            }, 425); 
        })
    })