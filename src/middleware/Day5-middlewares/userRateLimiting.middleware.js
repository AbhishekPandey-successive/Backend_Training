// Rate Limiting Middleware
import {RateLimit} from '../../service/userRateLimiter.js'

const Limit=new RateLimit()

const RateLimitingMiddleware=Limit.rateLimiter

export {RateLimitingMiddleware}