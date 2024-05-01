// Implement middleware to validate the geographic location of the client. If the request is not coming from an expected region, respond with an error.


const express = require("express");

const app = express();



const unirest = require("unirest");


app.get("/", (req, res) => {

  var apiCall = unirest("GET",

    "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"

  );

  apiCall.headers({

    "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",

    "x-rapidapi-key": "ede5bf4965msh87ff877d4afcaabp18a634jsn7f683b27be1a"

  });

  apiCall.end(function(result) {

    if (res.error) throw new Error(result.error);

    console.log(result.body);

    res.send(result.body);

  });

});






app.listen(3600, () => console.log('Example app listening on port 3600'))