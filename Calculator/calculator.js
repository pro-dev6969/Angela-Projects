
const express = require("express");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}))
app.get("/" , function(req,res){

    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);

    var result = n1+n2;

    // res.send("<em> Thanks for posting ! </em><br>The Result is : " + result)
    res.sendStatus(404);
})


app.listen("3000" , function(){
    console.log("server running");
})









