const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { response } = require("express");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})



app.post("/" , function(req,res){
    console.log("submission started \n");
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;



    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                } 
            }
        ]
    };

    const jsondata = JSON.stringify(data);

    const url = "https://us17.api.mailchimp.com/3.0/lists/a6b32da3dd"

const options = {
      method : "POST",
      auth : "Vedant1:bac92c3a06d0a9549c1c0d2a4bd1244f-us17"
}

const rqst = https.request(url , options , function(response){
    response.on("data" , function(data){
        console.log(JSON.parse(data));
    })
})

if(response.statusCode===200){
    res.sendFile(__dirname+"/success.html");
    // res.send("submitted");
}
else{
    res.sendFile(__dirname + "/failure.html");
    // res.send("fail");
}
rqst.write(jsondata)    // Here the data is send (written) on the mailchimp server! 
rqst.end()

});

app.post("/failure",(res)=>{
    res.redirect("/");
});

app.listen(3000,function(req,res){
    console.log("server is running on port 3000");
})


// key = bac92c3a06d0a9549c1c0d2a4bd1244f-us17

// list id = a6b32da3dd


