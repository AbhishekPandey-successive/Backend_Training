"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomHeader = void 0;
function addCustomHeader(req, res, next) {
    req.headers['Name'] = 'Abhishek Pandey';
    console.log('Custom Header Value:', req.headers['Name']);
    next();
}
exports.addCustomHeader = addCustomHeader;
