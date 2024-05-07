const express=require('express')

const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;

const userRouter = require('./routes/userRoutes')
const app=express()

app.use('/users',userRouter)

app.listen(PORT,()=>{
    console.log("Server started on the port", PORT)
})