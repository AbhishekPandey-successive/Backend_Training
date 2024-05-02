const express=require("express")
const { getData ,getSeededData} = require("../controllers/UserControllers")

const userRouter=express.Router()




userRouter.get('/getData',getData)
userRouter.post('/getseededData',getSeededData)




module.exports=userRouter