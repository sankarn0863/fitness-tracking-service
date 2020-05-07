var Models=require("../Models/app");
const router=express.Router();
router.post('/Register', function (req, res) {
      var user=new Models.User();
      user.Username=req.body.Username;
      user.MailID=req.body.MailID;
      user.Name=req.body.Name;
      user.PhoneNo=req.body.PhoneNo;
      user.City=req.body.City;
      user.State=req.body.State;
      user.Country=req.body.Country;
      user.Passcode=req.body.passcode;
      user.status=true
      console.log(user);
      user.save((error)=>{
      if(!error)
      {
          res.send({
              "statusCode":325,
              "msg":"You are registered successfully!"
          });
      }
      else
      {
          res.send({
            "statusCode":425,
            "msg":"Sorry, Something went wrong!"
        });
      }
    })
  });
  module.exports= router;