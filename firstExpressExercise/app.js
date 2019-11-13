var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("Hi! Welcome to my assignment.");
});
app.get("/speak/:animalName",function(req,res){
    var animal=req.params.animalName.toLowerCase();
    
    var voice={
        dog:"Woof Woof!",
        cow:"Moo",
        pig:"Oink"
    };
    var voice=voice[animal];
    // if(animal==="dog"){
    //     voice=("'Woof Woof!'");
    // }else if(animal==="cow"){
    //     voice=("'Moo'");
    // }else if(animal==="pig"){
    //     voice=("'Oink'");
    // }
    res.send("The "+animal+" says "+voice);
});
app.get("/repeat/:word/:num",function(req,res){
    var word=req.params.word;
    var num=Number(req.params.num);
    var statement="";
    for(var i=0;i<num;i++){
        statement+=word+" ";
    }
    res.send(statement);
});

app.get("*",function(req,res){
    res.send("Sorry, page not found...  What are you doing with your life?");
});
//Tell express to listen for requests(start server)
var port=process.env.Port || 3000;
app.listen(port,function(){
    console.log("Server has started!");
});
