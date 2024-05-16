// Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console

const UrlTimeStamp=(req,res,next)=>{
    
    const timestamp=new Date().toISOString()

    console.log(`${timestamp}, ${req.url},${req.method}`)

    next();

}

export {UrlTimeStamp}