const Order = require('../../models/Order');

// Creates an order using the Order.create() method, which includes the attributes: orderedBy, deliveryLocation and lineItem.
// We make a callback function afterwards.
module.exports = (req,res)=>{
    Order.create({
        orderedBy: req.session.userId,
        deliveryLocation: req.body.deliveryLocation,
        lineItem: req.session.lineItems
    }, (error,Order)=>{
        if(error) {
            console.log(error)
            return res.redirect('/lineItems')
        }
        else {
            // The lineItems in session is made an empty object and then we het redirected to the orderHistory for the logged in user
            req.session.lineItems =  {};
            return res.redirect('/orderHistory/' + req.session.userId);
        }
    })
};