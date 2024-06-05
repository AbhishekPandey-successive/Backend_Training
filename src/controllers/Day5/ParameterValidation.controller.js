class UserParameter{

    parameterValidation(req,res)
    {
        res.status(200).json({
            status:"success",
            message:"All users Parameters are verified successfully"
        })
    }
}

export {UserParameter} 