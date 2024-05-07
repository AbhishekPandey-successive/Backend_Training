// Build middleware that adds a custom header to every response. Allow the header value to be configurable.

const express=require('express')
const app=express();

const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;

function middleware1(req,res,next){
    const customHeaderName = 'My-Custom-Header';
    const customHeaderValue = 'MyCustomValue';

    res.setHeader(customHeaderName, customHeaderValue);
    
    next();
}

app.use(middleware1)


app.get('/',(req,res)=>{
    res.send("Custom Header1 is set")
})

app.get('/user',(req,res)=>{
    res.send("Custom Header2 is set")
})


app.listen(PORT,()=>{
    console.log("Server started on the port", PORT)
})