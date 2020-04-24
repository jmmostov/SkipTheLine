const Product = require('../../models/Product');
const LineItem = require('../../models/LineItem');
//const path = require('path');

// Here we want to add the chosen product to the customers lineItem. This lineItem kind of like a shopping cart.
module.exports = (req,res)=> {
    // Firstly, we take the _id of the product pressed (which has been sent through as the API ":id") and make it a variable
    let productId = req.params.id;
    let lineItems = new LineItem(req.session.lineItems ? req.session.lineItems: {});

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