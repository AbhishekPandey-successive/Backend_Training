const express=require('express')
const Joi=require('joi')
const app=express()

app.use(express.json())

const requireFilter=(req,res,next)=>{
    const{error,value}=userSchema.validate(req.body,{
        abortEarly:false
    })

    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }

    next()
}


const userSchema=Joi.object({
    username:Joi.string().alphanum().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword:Joi.ref("password"),
    
})


app.get('/register',requireFilter,(req,res)=>{
    res.send("Authorized user now you can Proceed")
})



app.listen(2400,()=>{
    console.log("Server started on the port 2400")
})



