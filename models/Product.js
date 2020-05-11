// Mongoose setup:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    // The products in the database will only consist of three things, id, productName and price.
    productName: String,
    price: Number
});


const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;

