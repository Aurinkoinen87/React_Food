const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const cors = require('cors')


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




app.use((req, res)=> {
    res.status(404)
})