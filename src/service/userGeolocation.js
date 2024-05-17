// const unirest = require('unirest')

import unirest from 'unirest'

export class Geolocation{
 
   async  getLocation(headers)
    {
       return await(await fetch('https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',{
            method:"GET",
            headers
        })).json()
        
    }

    
}

