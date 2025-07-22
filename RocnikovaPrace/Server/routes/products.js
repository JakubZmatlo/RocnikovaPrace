const express = require('express');
const router = express.Router();

const productController = require('../controllers/products')

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/addproduct', productController.createProduct);
router.delete('/:id', productController.updateProduct);
router.put('/', productController.deleteProduct);

module.exports = router;