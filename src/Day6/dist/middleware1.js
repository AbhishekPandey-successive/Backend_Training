"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterValidation = void 0;
function ParameterValidation(req, res, next) {
    const name = req.params.name;
    const id = Number(req.params.id);
    if (name !== "Abhishek" || id !== 123456) {
        res.status(400).json({
            status: "fails",
            message: "Wrong name parameters or id parameters are entered",
        });
    }
    else {
        next();
    }
}
exports.ParameterValidation = ParameterValidation;
