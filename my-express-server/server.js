
const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("<h1> Welcome To Your Server</h1>");
})

app.get("/hobby",function(req,res){
    res.send("hobby me at vedantbhardwaj10@gmail.com");
})

app.get("/contact",function(){
    res.send("contact me at vedantbhardwaj10@gmail.com");
})
app.listen("3000",function(){
    console.log("server running");
});

