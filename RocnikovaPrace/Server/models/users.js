const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    cartData:{type: Object, required: true},
    date:{type: Date,default: Date.now,}
  });

  module.exports = mongoose.model("User", schema);