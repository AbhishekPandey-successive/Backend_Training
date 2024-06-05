
// Create an asynchronous route that intentionally throws an error.Implement error handling for asynchronous errors within the route.Send an appropriate response to the client, indicating the error.


class AysnChronousErrorHandler{

    async generateError(req,res,next)
    {
        try{
            throw new Error('This is an intentional error');  

        }
        catch(error)
        {
            next(error) 
        }
    }
}

export {AysnChronousErrorHandler}