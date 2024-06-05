
function errHandlerMiddleware(err,req,res,next)
{
    res.status(500).json({error:err.message})

}

export {errHandlerMiddleware}