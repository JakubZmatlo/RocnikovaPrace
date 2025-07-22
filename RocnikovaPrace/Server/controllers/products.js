const Product = require('../models/products');

exports.getAllProducts = async (res, req, next) => { };
exports.getProductById = async (res, req, next) => { };
exports.createProduct = async (res, req, next) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1
    }
    try {
        const product = new Product({
            id: req.body.id,
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            image: req.body.image
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Product created",
                payload: result,
                success: true
            });
        }
        res.status(500).send({
            message: "Product was not created",
            success: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
exports.updateProduct = async (res, req, next) => { };
exports.deleteProduct = async (res, req, next) => { };