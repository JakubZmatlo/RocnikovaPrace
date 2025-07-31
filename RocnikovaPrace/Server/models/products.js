const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now },
    availability: { type: Boolean, default: true },
    description: {type: [String], default: []}

});

module.exports = mongoose.model("Product", schema);