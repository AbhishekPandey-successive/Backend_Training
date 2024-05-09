const express=require('express')

const middlewareValidation=require('../controllers/middlewareValidation')

const userRouter=express.Router();

const instance=new middlewareValidation()

const Schema=instance.userSchema


const requireFilter=(req,res,next)=>{
    const{error,value}=Schema.validate(req.body,{
        abortEarly:false
    })

    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }

    next()
}

userRouter.post('/midValidate',requireFilter,(req,res)=>{
    res.send("Authorized user now you can Proceed")
})


module.exports=userRouter

