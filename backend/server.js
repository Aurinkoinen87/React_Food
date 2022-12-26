import express from 'express'
import cors from 'cors'
import fs from 'fs'
import mongoose from 'mongoose'
import { authValidation } from './validations/auth.js'
import { authMe, login, register } from './controllers/auth-controller.js'

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

app.post('/auth/login', login)
app.post('/auth/register', authValidation, register)
app.get('/auth/me', authMe)



app.use((req, res)=> {
  res.status(404)
})