// Develop an authentication middleware using a JWT dummy token.

const express=require('express')
const jwt=require('jsonwebtoken')
const SECRET_KEY="Abhi@123"

const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;

const app=express()

app.post('/login',(req,res)=>{
    const user={
        username:"Abhishek Pandey",
        id:1,
        email:"abhishekpandey.20ec0036@gmail.com"
    }

    jwt.sign({user},"SECRET_KEY",{expiresIn:'300s'},(error,token)=>{
        res.json({
            token,
            user
        })
    })
})


app.post('/profile',verifyToken,(req,res)=>{

    jwt.verify(req.token,SECRET_KEY,(err,authData)=>{
        if(err)
        {
            res.send({result:"invalid token"})
        }

        else{
            res.json({
                message:"profile access",
                authData
            })
        }
    })

})


function verifyToken(req,res,next)
{
 const bearerHeader=req.headers['authentication']
 if(typeof bearerHeader !== 'undefined')
 {
    const bearer=bearerHeader.split(" ");
    const token=bearer[1]
    req.token=token;
    next()

 }
 else{
    res.send({
        result:"Token is not valid"
    })
 }


}






app.listen(PORT,()=>{
    console.log("Server started on the port", PORT)
})
