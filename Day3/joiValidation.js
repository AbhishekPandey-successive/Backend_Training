const express=require('express')
const Joi=require('joi')

const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;

const app=express()
app.use(express.json())




const userSchema=Joi.object({
    username:Joi.string().alphanum().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword:Joi.ref("password"),
    
})





app.post('/signup',(req,res)=>{
    const {error,value}=userSchema.validate(req.body,{
        abortEarly:false
    })

    if(error)
    {
        console.log(error);
        return res.send("Invalid Request")
    }
    
    res.send("User has Successfully signedup :")
})



app.listen(PORT,()=>{
    console.log("Server started on the port", PORT)
})
