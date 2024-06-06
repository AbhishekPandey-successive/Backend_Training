import { Request, Response, NextFunction } from 'express';

const ErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "fail";
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
    });
};

export { ErrorHandler }