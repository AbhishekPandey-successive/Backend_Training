import {Geolocation} from '../service/userGeolocation.js'

const ls= new Geolocation()

export class UserLocation{
    async getLocation(req,res){
        const headers=req.headers
        const location =await ls.getLocation(headers)
        res.json({location})
    }
}