
const express=require('express')
const userRouter=express.Router()

const validateClass=require('../controllers/ValidationService')

const validateAge=new validateClass()

userRouter.get('/queryValidate',(req, res) => {
    try {
      const age = parseInt(req.query.age); 
      validateAge.validateAge(age); 
      res.send('User Query Parameters are successfully verified.');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })

  module.exports=userRouter
