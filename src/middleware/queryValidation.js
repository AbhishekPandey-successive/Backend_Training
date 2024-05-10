const queryValidation=(req,res,next)=>{
    const age=req.query.age
    if(!age || isNaN(age))
    {
       res.status(400).send("Invalid Value of Parameter")
    }
    next()
 }

 export {queryValidation}
