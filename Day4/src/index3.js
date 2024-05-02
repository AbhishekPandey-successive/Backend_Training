// Implement an error-handling middleware that captures errors thrown in the route handlers and sends an appropriate error response.


const express=require('express')
const app=require()


const requiredFilter=(err,req,res,next)=>{

  console.log(err)
  res.status(500).send("Internal Server Error")
}

app.get('/',(req,res)=>{
    res.send("Hello user")
})

app.get('/error',requiredFilter,(req,res)=>{
    throw new Error("Something Went wrong")
})

app.listen(4200,()=>{
    console.log("Server Starting at Local Port 4200")
})