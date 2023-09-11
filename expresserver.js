const express=require('express');//importing express module
const app=express();//adding functionalities of express in app
const bodyParser=require("body-parser")

const port=80;//in port 80 we don't need to specify the port number while accessing using localhost
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})
//app.get("/",(req,res)=>{
  //  res.send("this is express server");
//})
app.get("/about",(req,res)=>{
    res.send("getting this on about page");
})
app.post("/about",(req,res)=>{
    res.send("responding on post req on about");
})
app.post("/",(req,res)=>{
    console.log(req.body.num1);
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var sum=num1+num2;
    res.send("the result of sum is "+sum);
})
app.listen(port,()=>{
    console.log("server is running like bullet train")
})
