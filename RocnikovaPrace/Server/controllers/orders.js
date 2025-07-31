const Orders = require('./models/orders');

app.post('/createorder', async (req, res) => {
  try {
    const token = req.headers['auth-token'];
    const data = jwt.verify(token, 'secret_ecom');
    const user = await Users.findById(data.user.id);

    const { items, paymentMethod } = req.body;

    const order = new Orders({
      userId: user._id,
      items: items,
      paymentMethod: paymentMethod || 'COD',
    });

    await order.save();

    // Vyčistit košík
    user.cartData = {};
    await user.save();

    res.json({ success: true });
  } catch (err) {
    console.error('Chyba při vytváření objednávky:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});