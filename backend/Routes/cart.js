const express = require('express')
const routers = express.Router()

const {
  createCart,
  getCart,
  getSingleCart,
  deleteCart,
  updateCart,
} = require('../controllers/cartController')

routers.get('/', getCart)

routers.get('/:id', getSingleCart)

routers.post('/', createCart)

routers.delete('/:id', deleteCart)

routers.patch('/:id', updateCart)
module.exports = routers
