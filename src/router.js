

import {Router} from 'express'

import {requestValidation } from './middleware/validation.js'
import { queryValidation } from './middleware/queryValidation.js'


import {UserController} from './controllers/user.controller.js'
import {Geolocation} from './controllers/userGeolocation.js'
import {ValidationService} from './controllers/ValidationService.js'


const instance= new UserController()
const instance1=new Geolocation()
const instance2=new ValidationService()

const api=instance1.getApiCall()




const backendRoutes = Router();

backendRoutes.post('/day3/joiValidate', requestValidation,instance.validate)

backendRoutes.get('/day3/geolocate',(req,res)=>{
    api.headers({

        "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
    
        "x-rapidapi-key": "ede5bf4965msh87ff877d4afcaabp18a634jsn7f683b27be1a"
    
      })


      api.end(function(result) {

        if (res.error) throw new Error(result.error);
    
        console.log(result.body);
    
        res.send(result.body);
    
      })

})

backendRoutes.get('/day3/queryValidate',queryValidation,instance2.queryValidate)



export default backendRoutes;