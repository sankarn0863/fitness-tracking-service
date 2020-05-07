var Models=require("../Models/app");
const router=express.Router();
router.post('/upload', function (request, rest) {
    var upload=new Models.Uploads();
    upload.From=req.body.id;
    upload.upload_Name=request.body.upload_Name;
    upload.Title=req.body.title;
    upload.Desk=req.body.desk;;
    upload.File=req.body.file;
    upload.Time=req.body.time;
    upload.status=true;
    upload.save((error)=>{
    if(!error)
    {
    rest.send({
    "statusCode":325,
    "msg":"Uploaded Successfully"
    });
    }
    else
    {
            console.log("Something went wrong!"+error);
        }
    })
  });