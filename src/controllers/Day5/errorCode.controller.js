// Create scenarios that generate all possible error codes

class ErrorCode{

     Notfound(req,res){
        res.status(404).json({
            status:404,
            message:"Not Found"
        })
     }


     Error(req,res)
     {
        throw new Error("Internal Server Error")
     }



     CustomError(req,res){
        res.status(400).json({
            status:400,
            message:"Custom Error"
        })
     }
     

     UnauthorizedError(req,res)
     {
        res.status(401).json({
            status:401,
            message:"Error Generated due to Unauthorized access"
        })
     }


     ForbiddenError(req,res)
     {
        res.status(403).json({
            status:403,
            message:"Forbidden Error Generated"
        })
     }


     ToomanyRequest(req,res)
     {
        res.send("Within the Limit")
     }


}

export {ErrorCode}