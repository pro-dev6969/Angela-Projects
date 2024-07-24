const { request } = require("express");
var express = require("express");

var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator",function(req,res){

    var w = Number(req.body.weight);
    var h = Number(req.body.height);

    var result = w/(h*h);

    res.send("Thanks for posting ! <br> <em> Your BMI is : </em>" + result);
})

app.listen("3000",function(req,res){
    console.log("server is running ! ");
})