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

module.exports = router;