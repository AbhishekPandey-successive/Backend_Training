// Rate Limiting Middleware
import {RateLimit} from '../../service/userRateLimiter.js'

const Limit=new RateLimit()

const rateLimiterMiddleware=Limit.rateLimiter

export {rateLimiterMiddleware}