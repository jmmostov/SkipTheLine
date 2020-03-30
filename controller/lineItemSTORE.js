const Product = require('../models/Product');
const LineItem = require('../models/LineItem');
const path = require('path');


module.exports = (req,res)=> {

    let productId = req.params.id;
    let lineItems = new LineItem(req.session.lineItems ? req.session.lineItems : {});

    Product.findById(productId, function (err, product) {
        if (err) {
            return res.redirect('/');
        }
        lineItems.add(product, product.id);
        req.session.lineItems = lineItems;
        console.log(lineItems);
        res.redirect('/products');
    });

};