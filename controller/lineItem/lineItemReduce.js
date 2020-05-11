const LineItem = require('../../models/LineItem');


// Here we want to reduce the chosen product in the customers lineItem.
module.exports = (req,res)=> {
    // Firstly, we take the _id of the product pressed (which has been sent through the API as the ":id") and make it a variable
    let productId = req.params.id;
    // See controller/lineItem/lineItemGET.js for an explanation.
    let lineItems = new LineItem(req.session.lineItems ? req.session.lineItems: {});

    // We use the method from models/LineItem.js
    lineItems.deleteOne(productId);
    // We assign the newly adjusted lineItems to the session.
    req.session.lineItems = lineItems;
    // We respond with a redirect to the same page again.
    res.redirect('/lineItems');
};