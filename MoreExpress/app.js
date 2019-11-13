var express=require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});
app.get("/task/:work",function(req,res){
    var task=req.params.work;
    res.render("tasks",{taskVar:task});
});
app.get("/posts",function(req,res){
    var posts=[
        {title:"post1",author:"Rishabh"},
        {title:"post2",author:"Sharma"},
        {title:"post3",author:"RS"}
    ];
    res.render("posts",{posts:posts});
});



var port=process.env.PORT||3000;
app.listen(port,function(){
    console.log("Server has started!");
});