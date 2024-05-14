//  setting the Custom Header
 function addCustomHeader(req, res, next) {
    
    req.headers['Name'] = 'Abhishek Pandey'
    console.log('Custom Header Value:', req.headers['Name'])

    next();
  };

  export {addCustomHeader}