import express from 'express'
import cors from 'cors'
import fs from 'fs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from './models/User.js'
import { authValidation } from './validations/auth.js'
import { validationResult } from 'express-validator'


mongoose.connect('mongodb+srv://alebastr:RooXVntj81UbqpIK@cluster0.cjwko2o.mongodb.net/food?retryWrites=true&w=majority')
.then(()=> console.log('DB connected')
)
.catch((err)=> console.log(err)
)

const app = express()


const PORT = 7000

app.use(cors())
app.use(express.json())


app.listen(PORT, (error)=> {
    error? console.error(error) : console.log(`Server started on port ${PORT}`)
})


const getData = () => {
  return new Promise((res, rej)=> {
    fs.readFile('pizzas.json', function(err, buf){
      if(err) rej(err)
      res(buf.toString())
    })
  })
}



app.get('/', (req, res)=> {
  getData()
  .then(data=> res.send(data))
    .catch(()=> res.status(404))
    
})

app.post('/auth/register', authValidation, async (req, res)=> {

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
  
    res.json({...user._doc})
  } 
  catch(err) {
    console.log(err)   
    res.status(500).json({
      message: 'registration was unsuccessful'
    })
  }
})


app.use((req, res)=> {
    res.status(404)
})