import express from 'express'
import cors from 'cors'
import fs from 'fs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { authValidation } from './validations/auth.js'
import { validationResult } from 'express-validator'


mongoose.connect('mongodb+srv://alebastr:BC1PmPNUYwylSBBQ@davaidavai.q6aq7i0.mongodb.net/?retryWrites=true&w=majority')

const app = express()


const PORT = 7000




app.use(cors())



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

app.post('/auth/register', authValidation, (req, res)=> {
  const errors = validationResult(req)
  if(!errors.isEmpty) return res.status(400).json(errors.array())
  res.json({
    success: true,
  })
})


app.use((req, res)=> {
    res.status(404)
})