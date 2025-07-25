const express = require('express');
const router = express.Router();

const productController = require('../controllers/products')

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/add-product', productController.createProduct);
router.delete('/:id', productController.updateProduct);
router.put('/:id', productController.deleteProduct);

module.exports = router;