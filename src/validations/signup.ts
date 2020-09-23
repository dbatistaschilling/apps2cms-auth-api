import { body } from 'express-validator'

export const signupValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('You must supply a name'),
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be in between 4 and 20 characters')
]
