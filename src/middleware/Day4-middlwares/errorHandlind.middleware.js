// Error Handling Middleware
const ErrorHandler=(err,req,res,next)=>{

    console.log(err)
    res.status(500).send("Internal Server Error")
  
  }

  export {ErrorHandler}