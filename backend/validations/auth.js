import { body } from 'express-validator'


export const registerValidation = [
  body('name', 'name should consist of at least 2 symbols').isLength({ min: 2}),
  body('email', 'wrong email address').isEmail(),
  body('password', 'password should consist of at least 5 symbols').isLength({ min: 5}),
  body('avatar').optional().isURL(),
]

export const loginValidation = [
  body('email', 'wrong email address').isEmail(),
  body('password', 'password should consist of at least 5 symbols').isLength({ min: 5}),
]