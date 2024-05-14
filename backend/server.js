require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const items = require('./Routes/cart')

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

app.use('/api', items)

// console.log(process.env.PORT)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected db and listening on', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })
