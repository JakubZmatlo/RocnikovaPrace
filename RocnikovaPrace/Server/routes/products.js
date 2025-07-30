const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

// ZMĚNA: specifikuj prefixy lépe
router.get('/', productController.getAllProducts);
router.get('/id/:id', productController.getProductById);
router.post('/addproduct', productController.createProduct);
router.delete('/delete/:id', productController.deleteProduct);
router.put('/update/:id', productController.updateProduct);

module.exports = router;