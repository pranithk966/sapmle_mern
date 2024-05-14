const cartItems = require('../Model/cart')
const mongoose = require('mongoose')

const getCart = async (req, res) => {
  const cartitem = await cartItems.find({}).sort({ createdAt: -1 })

  res.status(200).json(cartitem)
}

const getSingleCart = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such item' })
  }

  const item = await cartItems.findById(id)

  if (!item) {
    return res.status(404).json({ error: 'no such item found' })
  }

  res.status(200).json(item)
}

const createCart = async (req, res) => {
  const { name, price } = req.body

  try {
    const cartitem = await cartItems.create({ name, price })
    res.status(200).json(cartitem)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteCart = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such item' })
  }

  const item = await cartItems.findOneAndDelete({ _id: id })

  if (!item) {
    return res.status(400).json({ error: 'no such item found' })
  }
  res.status(200).json(item)
}

const updateCart = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such item' })
  }

  const item = await cartItems.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!item) {
    res.status(400).json({ error: 'no such item' })
  }
  res.status(200).json(item)
}

module.exports = { createCart, getCart, getSingleCart, deleteCart, updateCart }
