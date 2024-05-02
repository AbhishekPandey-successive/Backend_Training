const express=require('express')

const userRouter = require('./routes/userRoutes')
const app=express()

app.use('/users',userRouter)

app.listen(3900,()=>{
    console.log("Server Starting at Local Port 3900")
})