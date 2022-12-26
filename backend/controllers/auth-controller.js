import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from '../models/User.js'
import { validationResult } from 'express-validator'



export const register = async (req, res) => {

  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(400).json(errors.array())
  
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(req.body.password, salt)
  
    const doc = new UserModel({ 
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    })
  
    const user = await doc.save()

    const token = jwt.sign(
      {
      _id: user._id,
      },
      'secret',
      {
        expiresIn: '30d',
      }
    )

    const { password, ...userData } = user._doc

    res.json({ userData, token })
  } 
  catch(err) {
    console.log(err)   
    res.status(500).json({
      message: 'registration was unsuccessful'
    })
  }
}


export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email })

    if(!user) return res.status(404).json({
      message: 'there is no such email or password'
    })

    const isValid = bcrypt.compare(req.body.password, user._doc.password)

    if(!isValid) return res.status(404).json({
      message: 'there is no such email or password'
    })
    
    const token = jwt.sign(
      {
      _id: user._id,
      },
      'secret',
      {
        expiresIn: '30d',
      }
    )

    const { password, ...userData } = user._doc

    res.json({ userData, token })

  }
  catch (err) {
    console.log(err)   
    res.status(500).json({
      message: 'something went wrong, try again later!'
    })  }
}



export const authMe = async (req, res) => {

  try {
    const token = req.headers.authorization.replace(/Bearer\s?/, '')         
    const { _id } = jwt.verify(token, 'secret')
    const user = await UserModel.findById(_id)

    if(user) {
      const { password, ...userData } = user._doc
      res.status(200).json({ userData, token })
    } else {
      res.status(404).json({
        message: 'user not found'
       })
    }
  } 
  catch(err) {
    console.log(err)   
    res.status(500).json({
      message: 'access denied'
    })
  }
}


