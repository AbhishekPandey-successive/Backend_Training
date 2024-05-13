//  setting the Custom Header
 function addCustomHeader(req, res, next) {
    res.setHeader("My-Custom-Header", "Abhishek");
   
    next();
  };

  export {addCustomHeader}