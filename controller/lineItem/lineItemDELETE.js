const LineItem = require('../../models/LineItem');


// Here we want to add the chosen product to the customers lineItem. This lineItem kind of like a shopping cart.
module.exports = (req,res)=> {
    // Firstly, we take the _id of the product pressed (which has been sent through as the API ":id") and make it a variable
    let productId = req.params.id;
    let lineItems = new LineItem(req.session.lineItems ? req.session.lineItems: {});

    lineItems.deleteAll(productId);
    req.session.lineItems = lineItems;
    res.redirect('/lineItems');
};