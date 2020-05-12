LineItem = require('../../models/LineItem');


module.exports = (req,res)=> {
    // We create a new lineItem from the model which is based on the lineItem in the session. The question mark operator
    // means that the thing before it is the condition. The first thing after the operator is the "if the condition is true"
    // while the thing after the ":" is the "if the condition is false".
    // In other words, if session.lineItems is undefined or false, the session.lineItems is an empty object.
    let lineItems = new LineItem(req.session.lineItems ? req.session.lineItems: {});

    // Now we respond with the rendering of a page with the lineItems currently in the session.lineItems.
    // See the models/LineItem.js for an explanation of the gennerateArray()-method.
    res.render('lineItems',{
        products: lineItems.gennerateArray(),
        totalPrice: lineItems.totalPrice,
        deliveryFee: lineItems.deliveryFee, //adds deliveryFee at 50kr to the order.
    });
};