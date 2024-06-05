"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const ErrorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "fail";
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
    });
};
exports.ErrorHandler = ErrorHandler;
