const unirest = require('unirest')

class Geolocation{
    
    apicall=unirest("GET",

    "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"

    )
}

module.exports=Geolocation