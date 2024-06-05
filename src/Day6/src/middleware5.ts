import Joi from 'joi';

interface User {
    age: number;
}

const userSchema = Joi.object<User>({
    age: Joi.number().required(),
});

const QueryValidation = (req: any, res: any, next: any) => {
    const { error, value } = userSchema.validate(req.query.params);
    if (error) {
        res.status(400).send(error);
    }
    next();
};

export { QueryValidation };
