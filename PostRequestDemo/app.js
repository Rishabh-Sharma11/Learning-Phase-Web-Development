var express=require("express");
var app=express();

var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

var port=process.env.PORT||3000;
app.listen(port,function(){
    console.log("Server has started!");
});

app.set("view engine","ejs");

var friends=['A','B','C',"D"];

app.get("/",function(req,res){
    res.render("home");
});
app.get("/friends",function(req,res){
   
    res.render("friends",{friends:friends});
});
app.post("/addfriend",function(req,res){
    console.log(req.body);
    var newfriend=req.body.newFriend;
    friends.push(newfriend);
    // res.send("post request page");
    res.redirect("/friends");
});