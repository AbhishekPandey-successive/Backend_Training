import { Request, Response, NextFunction } from 'express';

function ParameterValidation(req: Request, res: Response, next: NextFunction) {
    const name = req.params.name;
    const id = Number(req.params.id);

    if (name !== "Abhishek" || id !== 123456) {
        res.status(400).json({
            status: "fails",
            message: "Wrong name parameters or id parameters are entered",
        });
    } else {
        next();
    }
}

export { ParameterValidation };