

import {Router} from 'express'

import {requestValidation } from './middleware/Day3-middlewares/validation.js'
import { QueryValidation } from './middleware/Day3-middlewares/queryValidation.js'
import {UrlTimeStamp}from './middleware/Day4-middlwares/urlTimeStamp.middlware.js'
import {ErrorHandler}from './middleware/Day4-middlwares/errorHandlind.middleware.js'
import {combined}from './middleware/Day4-middlwares/combine.middleware.js'
import {addCustomHeader}from './middleware/Day4-middlwares/customHeader.middleware.js'
import {rateLimiterMiddleware} from './middleware/Day4-middlwares/rateLimiter.middleware.js'
import { errorHandlerMiddleware } from './middleware/Day5-middlewares/userErrorHandler.middleware.js'
import { RateLimitingMiddleware } from './middleware/Day5-middlewares/userRateLimiting.middleware.js'
import { errHandlerMiddleware } from './middleware/Day5-middlewares/userAsynchronousErrorHandler.middleware.js'
import { ParameterValidation } from './middleware/Day5-middlewares/userParameterValidations.middleware.js'



import {UserController} from './controllers/Day3/user.controller.js'
import {UserLocation} from './controllers/Day3/userLocation.controller.js'
import {UserQueryController} from './controllers/Day3/ValidationService.js'

import { UserMockData } from './controllers/Day4/user.MockData.controller.js'
import {UserUrlTimeStamp}from './controllers/Day4/userUrlTimeStack.controller.js'
import {UserErrorHandler}from './controllers/Day4/user.ErrorHandler.controller.js'
import {UserCombinedMiddleWare}from './controllers/Day4/user.CombinedMiddlware.controller.js'
import { UserCustomHeader } from './controllers/Day4/user.CustomHeader.controller.js'
import { UserRateLimit } from './controllers/Day4/user.RateLimiter.controller.js'


import { UserGenerateError} from './controllers/Day5/errorHandler.controller.js'
import { ErrorCode } from './controllers/Day5/errorCode.controller.js'
import { AysnChronousErrorHandler } from './controllers/Day5/asynchronousErrorhandler.controller.js'
import { UserParameter } from './controllers/Day5/ParameterValidation.controller.js'



const user= new UserController()
const geoLocation=new UserLocation()
const instance2=new UserQueryController()
const data=new UserMockData()
const urlTimeStamp=new UserUrlTimeStamp()
const errorHandler=new UserErrorHandler()
const middlewareInstance=new UserCombinedMiddleWare()
const customHeader=new UserCustomHeader()
const Limiter=new UserRateLimit()
const Error=new UserGenerateError()
const ErroCodes=new ErrorCode()
const asyncErrors=new AysnChronousErrorHandler()
const paramsValidate=new UserParameter()







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


backendRoutes.get('/day5/error',Error.generateError,errorHandlerMiddleware)
backendRoutes.get('/day5/notfound',ErroCodes.Notfound)
backendRoutes.get('/day5/badrequest',ErroCodes.Error)
backendRoutes.get('/day5/customError',ErroCodes.CustomError)
backendRoutes.get('/day5/unauthorized',ErroCodes.UnauthorizedError)
backendRoutes.get('/day5/forbidden',ErroCodes.ForbiddenError)
backendRoutes.get('/day5/limit',RateLimitingMiddleware,ErroCodes.ToomanyRequest)
backendRoutes.get('/day5/asyncerror',asyncErrors.generateError,errHandlerMiddleware)
backendRoutes.get('/day5/paramValidate/:name/:id',ParameterValidation,paramsValidate.parameterValidation)










export default backendRoutes;