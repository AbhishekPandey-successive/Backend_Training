

import {Router} from 'express'

import {requestValidation } from './middleware/validation.js'
import { QueryValidation } from './middleware/queryValidation.js'



import {UserController} from './controllers/user.controller.js'
import {UserLocation} from './controllers/userLocation.controller.js'
import {UserQueryController} from './controllers/ValidationService.js'



const user= new UserController()
const geoLocation=new UserLocation()
const instance2=new UserQueryController()





const backendRoutes = Router();

backendRoutes.post('/day3/joiValidate', requestValidation,user.validate)

backendRoutes.get('/day3/geolocate',geoLocation.getLocation)

backendRoutes.get('/day3/queryValidate',QueryValidation,instance2.validate)




export default backendRoutes;