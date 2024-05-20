// Middleware which Validates the user various parameters and genrates the response after Validations.
 
function ParameterValidation(req,res,next)
{
    const name=req.params.name
    const id=req.params.id *1

    if(name!=="Abhishek" || id!==123456)
    {
        res.status(400).json({
            status:"fails",
            message:"Wrong name parameters or id parameters is entered"
        })
    }

    next()
}

export {ParameterValidation}