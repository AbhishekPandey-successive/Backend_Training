const express=require('express')
const Geolocation=require('../controllers/userGeolocation')

const userRouter=express.Router()

const instance=new Geolocation()
const api=instance.apicall

userRouter.get('/geolocation',(req,res)=>{
   
    api.headers({

        "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
    
        "x-rapidapi-key": "ede5bf4965msh87ff877d4afcaabp18a634jsn7f683b27be1a"
    
      })


      api.end(function(result) {

        if (res.error) throw new Error(result.error);
    
        console.log(result.body);
    
        res.send(result.body);
    
      })




})

module.exports=userRouter