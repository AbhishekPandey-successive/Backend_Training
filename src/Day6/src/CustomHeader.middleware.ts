import { Request, Response, NextFunction } from 'express';

function addCustomHeader(req: Request, res: Response, next: NextFunction) {
    req.headers['Name'] = 'Abhishek Pandey';
    console.log('Custom Header Value:', req.headers['Name']);
    next();
}

export { addCustomHeader };