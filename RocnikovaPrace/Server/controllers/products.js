const Product = require("../models/products");

exports.getAllProducts = async (req, res, next) => {
  try {
    const { category, search } = req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }

    if (search && search.trim().length > 0) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } }
      ];
    }

    

    const data = await Product.find(filter);

    if (data.length > 0) {
      return res.status(200).send({
        message: "Products found",
        payload: data,
      });
    }

    res.status(404).send({
      message: "No products found",
    });
  } catch (err) {
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
exports.deleteProduct = async (req, res) => {
  try {
    const idToDelete = Number(req.params.id);
    const result = await Product.findOneAndDelete({ id: idToDelete });

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product deleted",
      payload: result
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};