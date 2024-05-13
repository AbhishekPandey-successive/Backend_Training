
import Joi from 'joi'

 const userSchema=Joi.object({
    
    age:Joi.number().required()
  
    
})



const QueryValidation=(req,res,next)=>{
   const {error,value}= userSchema.validate(req.query.params)
    if(error){
       res.status(400).send(error)
    }
  next()
}






export {QueryValidation}



