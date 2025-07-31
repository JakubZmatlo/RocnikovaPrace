const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Users = require('../models/users'); // nebo podle umístění

// vrátí objednávky uživatele (prozatím z cartData)
router.get('/my-orders', async (req, res) => {
  try {
    const token = req.headers['auth-token'];
    const data = jwt.verify(token, 'secret_ecom');
    const user = await Users.findById(data.user.id);

    if (!user) return res.status(404).json({ error: "User not found" });

    // Pro začátek vracíme cartData jako "objednávky"
    res.json({ success: true, orders: user.cartData }); 
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;