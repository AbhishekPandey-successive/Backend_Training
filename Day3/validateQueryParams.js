
// 5.Create middleware to validate that specific query parameters in a route are numeric. If a non-numeric value is provided, respond with an appropriate error message.


const express=require('express')
const app=express()

const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;

const validateParams = (req, res, next) => {
    

   
        if (!req.query.age || isNaN(req.query.age)) {
            
            return res.status(400).json({ error: 'Invalid value for parameter' });
        }
    

   
    next();
};

app.get('/user',validateParams,(req,res)=>{
    res.send("User Query Paramas are successfully verified.")
})



app.listen(PORT,()=>{
    console.log("Server started on the port", PORT)
  })