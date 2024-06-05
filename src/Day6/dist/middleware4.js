"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    username: joi_1.default.string().alphanum().min(3).max(30).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword: joi_1.default.ref("password"),
});
const requestValidation = (req, res, next) => {
    const { error, value } = userSchema.validate(req.body);
    if (error) {
        res.status(400).send(error);
    }
    next();
};
exports.requestValidation = requestValidation;
