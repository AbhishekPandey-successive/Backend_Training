// Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.


const express=require('express')
const app=express()

const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;


const requiredFilter=(req,res,next)=>{
    
    const timestamp=new Date().toISOString()

    console.log(`${timestamp}, ${req.url},${req.method}`)

    next();

}

app.use(requiredFilter)

app.get('/',requiredFilter,(req,res)=>{ 

console.log("Hello user find the log information in console")


})



app.listen(PORT,()=>{
    console.log("Server started on the port", PORT)
})




