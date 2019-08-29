require("dotenv").config();
const express= require("express");
const helmet = require('helmet')
const app =express();
const PORT=process.env.PORT||3000;

app.use(helmet())
app.get('/',(req,res)=>{
    res.send("welcome to our system")
});
app.listen(3000, ()=>{
    console.log(`runing in ${PORT}`)
});

module.exports=app;