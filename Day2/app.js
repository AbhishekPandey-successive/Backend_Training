const app=require('./mockData')
const express=require('express')
const value=express()

value.get('',(req,res)=>{
    res.send(app)
})

value.listen(1500)
