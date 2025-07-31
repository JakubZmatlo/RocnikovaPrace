const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Users' },
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  paymentMethod: { type: String, enum: ['COD', 'Card'], default: 'COD' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Orders', orderSchema);