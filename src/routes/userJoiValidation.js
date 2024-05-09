const express=require('express')

const JoiValidation=require('../controllers/joivalidation')

const userRouter=express.Router()

const instance=new JoiValidation()

const Schema=instance.userSchema

userRouter.post('/joiValidate',(req,res)=>{
    const {error,value}=Schema.validate(req.body,{
        abortEarly:false
    })

    if(error)
    {
        console.log(error);
        return res.send("Invalid Request")
    }
    
    res.send("User has Successfully signedup :")
})

module.exports=userRouter


