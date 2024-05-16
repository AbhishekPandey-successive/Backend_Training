
export class UserQueryController{


  validate(req,res){
      const age= req.query.params;
      if(!age || isNaN(age)){
         
          res.status(403).send('Numeric Parameter is required and it should be numeric');
      }

     
      res.send("Numeric Parameter Verified")

     
    
     

  }

}










  

  