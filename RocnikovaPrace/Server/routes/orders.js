const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Order = require('../models/orders');
const fetchUser = require('../middlewares/fetchUser');

router.post('/createorder', fetchUser, async (req, res) => {
    try {
        const { items, paymentMethod } = req.body;

        if (!items || !Array.isArray(items)) {
            return res.status(400).json({ success: false, message: "Neplatné položky" });
        }

        const order = new Order({
            user: req.user.id,
            items,
            paymentMethod,
        });

        await order.save();
        res.json({ success: true, order });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

router.get('/my-orders', fetchUser, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json({ success: true, orders });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

router.delete('/delete/:id', fetchUser, async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findOne({ _id: orderId, user: req.user.id });

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    await Order.findByIdAndDelete(orderId);
    res.json({ success: true, message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;