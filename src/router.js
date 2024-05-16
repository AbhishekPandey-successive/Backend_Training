

import {Router} from 'express'

import {requestValidation } from './middleware/Day3-middlewares/validation.js'
import { QueryValidation } from './middleware/Day3-middlewares/queryValidation.js'
import {UrlTimeStamp}from './middleware/Day4-middlwares/urlTimeStamp.middlware.js'
import {ErrorHandler}from './middleware/Day4-middlwares/errorHandlind.middleware.js'
import {combined}from './middleware/Day4-middlwares/combine.middleware.js'
import {addCustomHeader}from './middleware/Day4-middlwares/customHeader.middleware.js'
import {rateLimiterMiddleware} from './middleware/Day4-middlwares/rateLimiter.middleware.js'



import {UserController} from './controllers/Day3/user.controller.js'
import {UserLocation} from './controllers/Day3/userLocation.controller.js'
import {UserQueryController} from './controllers/Day3/ValidationService.js'

import { UserMockData } from './controllers/Day4/user.MockData.controller.js'
import {UserUrlTimeStamp}from './controllers/Day4/userUrlTimeStack.controller.js'
import {UserErrorHandler}from './controllers/Day4/user.ErrorHandler.controller.js'
import {UserCombinedMiddleWare}from './controllers/Day4/user.CombinedMiddlware.controller.js'
import { UserCustomHeader } from './controllers/Day4/user.CustomHeader.controller.js'
import { UserRateLimit } from './controllers/Day4/user.RateLimiter.controller.js'




const user= new UserController()
const geoLocation=new UserLocation()
const instance2=new UserQueryController()
const data=new UserMockData()
const urlTimeStamp=new UserUrlTimeStamp()
const errorHandler=new UserErrorHandler()
const middlewareInstance=new UserCombinedMiddleWare()
const customHeader=new UserCustomHeader()
const Limiter=new UserRateLimit()







const backendRoutes = Router();

backendRoutes.post('/day3/joiValidate', requestValidation,user.validate)
backendRoutes.get('/day3/geolocate',geoLocation.getLocation)
backendRoutes.get('/day3/queryValidate',QueryValidation,instance2.validate)


backendRoutes.get('/day4/mockData',data.getMockData)
backendRoutes.get('/day4/urlTimeStamp',UrlTimeStamp,urlTimeStamp.getUrlTimeStack)
backendRoutes.get('/day4/getError',ErrorHandler,errorHandler.throwError)
backendRoutes.get('/day4/combineMiddleware',combined,middlewareInstance.combinedMiddleware)
backendRoutes.get('/day4/customheader',addCustomHeader,customHeader.setCustomHeader)
backendRoutes.get('/day4/rateLimit',rateLimiterMiddleware,Limiter.rateLimiterresponse)








export default backendRoutes;