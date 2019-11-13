var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("Hi There!");
});
app.get("/bye",function(req,res){
    res.send("Good bye!");
});
app.get("/dog",function(req,res){
    res.send("meow");
});
app.get("/r/:subredditName/comments/:id/:title/",function(req,res){
    var subreddit=req.params.subredditName;
    res.send("WELCOME TO THE "+subreddit.toUpperCase()+" SUBREDDIT.");
});
app.get("*",function(req,res){
    res.send("You are a star. This page appears when you enter any other get request url");
});
//Tell express to listen for requests(start server)
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
