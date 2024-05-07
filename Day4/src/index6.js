// Develop middleware that limits the number of requests a user can make in a given time frame. Include parameters for setting the limit.

const express=require('express')
const app=express()
const rateLimit=require('express-rate-limit')

const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;

const rateLimitMiddleware=rateLimit({
    windows:60*1000,
    max:5,
    message:"You have exceeded 5 request per minute",
    headers:true
})

app.use(rateLimitMiddleware)

app.get('/api',(req,res)=>{
    res.send("Rate Limiter")
})

app.listen(4600,()=>{
    console.log("Server Running on LOcal Port 4600")
})

app.listen(PORT,()=>{
    console.log("Server started on the port", PORT)
})