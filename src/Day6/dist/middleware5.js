"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    age: joi_1.default.number().required(),
});
const QueryValidation = (req, res, next) => {
    const { error, value } = userSchema.validate(req.query.params);
    if (error) {
        res.status(400).send(error);
    }
    next();
};
exports.QueryValidation = QueryValidation;
