const Product = require("../models/products");

exports.getAllProducts = async (req, res, next) => {
    try{
        const data = await Product.find();
        if (data && data.length != 0){
            return res.status(200).send({
                message: "Products found",
                payload: data
            });
        }
        res.status(404).send({
            message: "Products were not found"
        })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.getProductById = async (req, res, next) => {
    try{
        const data = await Product.findById(req.params.id);
        if (data){
            return res.status(200).send({
                message: "Product found",
                payload: data
            });
        }
        res.status(404).send({
            message: "Product was not found"
        })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.createProduct = async (req, res, next) => {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1;
    }
    try{
      const data = new Product({
        id: id,
        name: req.body.name,
        category: req.body.category,
        price: Number(req.body.price),
        image: req.body.image
      });
      const result = await data.save();
      if(result){
        return res.status(201).send({
            success: true,
            message: "Product created",
            payload: result
        });
      }
      res.status(500).send({
        success:true,
        message: "Product was not created"
    })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.updateProduct = async (req, res, next) => {
    try{
        const data = {
          id: id,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        image: req.body.image
        };
        const result = await Product.findByIdAndUpdate(req.params.id, data);
        if(result){
          return res.status(200).send({
              message: "Product updated",
              payload: result
          });
        }
        res.status(500).send({
            message: "Product was not updated"
        })
      } catch (err){
          res.status(500).send(err);
      }
};
exports.deleteProduct = async (req, res, next) => {
    try {
      const idToDelete = Number(req.params.id);
      const result = await Product.findOneAndDelete({ id: idToDelete });
  
      if (result) {
        return res.status(200).send({
          message: "Product deleted",
          payload: result
        });
      } else {
        return res.status(404).send({
          message: "Product not found"
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  };