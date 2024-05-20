// Incorporate the error handling middleware

class UserGenerateError{

    generateError(req,res,next)
    {
        const err=new Error("User has Intentionally thrown Error")
        err.status="fail",
        err.statusCode=400

        next(err)
    }
}

export {UserGenerateError}