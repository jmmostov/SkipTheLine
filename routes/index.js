const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


/* GET all products */
router.get('/', function(req, res, next) {
    let products = Product.find();
    res.render('index', {
        productSchema: products
    });
});



// POST new products
router.post('/product/new', )

module.exports = router;