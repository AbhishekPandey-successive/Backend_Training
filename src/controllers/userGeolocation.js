// const unirest = require('unirest')

import unirest from 'unirest'

export class Geolocation{
 
    getApiCall()
    {
        return unirest("GET",

        "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"
    
        )
    }

    
}

