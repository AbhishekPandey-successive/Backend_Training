import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  confirmPassword: Joi.ref("password"),
});

const requestValidation = (req: any, res: any, next: any) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    res.status(400).send(error);
  }
  next();
};

export { requestValidation };
