import { body } from 'express-validator'


export const authValidation = [
  body('name').isLength({ min: 2}),
  body('email').isEmail(),
  body('password').isLength({ min: 5}),
  body('avatar').optional().isURL(),
]