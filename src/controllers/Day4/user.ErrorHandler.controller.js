class UserErrorHandler{

       throwError(req,res){
        (req,res)=>{
            throw new Error("Something Went wrong")
          
        }

       }
}

export {UserErrorHandler}