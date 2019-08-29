const express= require("express");
const app =express();

app.get('/',(req,res)=>{
    res.send("welcome to our system")
});
app.listen(3000, ()=>{
    console.log("xixiix")
});