import RateLimiter from 'express-rate-limit'

export class RateLimit{

    rateLimiter=RateLimiter({
        windows:60*1000,
        max:5,
        message:"You have exceeded 5 request per minute",
        headers:true
    })

}