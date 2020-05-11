const Product = require('../../models/Product');
const LineItem = require('../../models/LineItem');

// Here we want to add the chosen product to the customers lineItem. This lineItem kind of act like a shopping cart.
module.exports = (req,res)=> {
    // Firstly, we take the _id of the product pressed (which has been sent through the API as the ":id") and make it a variable
    let productId = req.params.id;
    // See controller/lineItem/lineItemGET.js for an explanation.
    let lineItems = new LineItem(req.session.lineItems ? req.session.lineItems: {});

    // We find the product by the id and execute a callback function based on the document from the database.
    Product.findById(productId, function (err, product) {
        if (err) {
            return res.redirect('/');
        }
        // See models/LineItem.js for an explanation of the .add-method.
        lineItems.add(product, product.id);
        // We assign the newly adjusted lineItems to the session.
        req.session.lineItems = lineItems;
        // Console.log is used as a testing mechanism
        console.log(lineItems);
        // Response with the same page again.
        res.redirect('/products');
    });

};