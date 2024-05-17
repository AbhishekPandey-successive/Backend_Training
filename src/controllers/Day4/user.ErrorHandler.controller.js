class UserErrorHandler{

       throwError(req,res,next){
       
            
            const Err=new Error("Ooppss Broked!!")
            Err.status="fail";
            Err.statusCode=500;
        
            next(Err)
          
        

       }

    
}

export {UserErrorHandler}