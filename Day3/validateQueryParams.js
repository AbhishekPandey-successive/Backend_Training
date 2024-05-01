
// 5.Create middleware to validate that specific query parameters in a route are numeric. If a non-numeric value is provided, respond with an appropriate error message.


const express=require('express')
const app=express()

const validateParams = (req, res, next) => {
    

   
        if (!req.query.age || isNaN(req.query.age)) {
            
            return res.status(400).json({ error: 'Invalid value for parameter' });
        }
    

   
    next();
};

app.get('/user',validateParams,(req,res)=>{
    res.send("User Query Paramas are successfully verified.")
})


app.listen(3800,()=>{
    console.log("Server is running on local Port 3800")
})