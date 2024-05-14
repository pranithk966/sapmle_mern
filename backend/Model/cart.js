const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cartItems = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('cartItems', cartItems)
