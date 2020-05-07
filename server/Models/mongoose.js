var mongoose=require("mongoose");
var url = "mongodb://localhost:3030/User_activities";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, function(error,DataBase) {
  if (error) throw error;
  console.log("Connected to Mongo DataBase!");
  DataBase.close();
});
require("../app");