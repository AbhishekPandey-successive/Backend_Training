// Incorporate the error handling middleware

const express = require('express');
const app = express();



app.all('*',(req,res,next)=>{
    const Err=new Error("Ooppss Broked!!")
    Err.status="fail";
    Err.statusCode=500;

    next(Err)
})

app.get('/user',(req,res)=>{
    res.send("No Error Found")
})

app.use((error,req,res,next)=>{
     error.statusCode=error.statusCode || 500
     error.status=error.status || "fail"
     res.status(error.statusCode).json({
        status:error.statusCode,
        message:error.message
     })
})



app.listen(5100,()=>{
    console.log("Server is Running on the Local Port 5100")
})