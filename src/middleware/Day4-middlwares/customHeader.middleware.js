//  setting the Custom Header
 function addCustomHeader(req, res, next) {
    res.header("X-New-Policy", "Success");
  
    next();
  };

  export {addCustomHeader}