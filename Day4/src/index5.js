// Build middleware that adds a custom header to every response. Allow the header value to be configurable.

const express=require('express')
const app=express();

function middleware1(req,res,next){
  res.set('Content-Type','JSON-Application')
  next();
}

function middleware2(req,res,next)
{
    res.set({
        'Content-Type':'JSON-Application',
        'Content-Length':'123',
    })
}

app.get('/',middleware1,(req,res)=>{
    res.send("Custom Header1 is set")
})

app.get('/user',middleware2,(req,res)=>{
    res.send("Custom Header2 is set")
})

app.listen(4400,()=>{
    console.log("Server is Running on the Local Port 4400")
})