// Implement an error-handling middleware that captures errors thrown in the route handlers and sends an appropriate error response.


// const express=require('express')
import express from 'express'
const app=express()

// const dotenv = require("dotenv");
import dotenv from 'dotenv'
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;


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


app.listen(PORT,()=>{
    console.log("Server started on the port", PORT)
})
