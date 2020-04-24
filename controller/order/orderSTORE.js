const Order = require('../../models/Order');

//creates an order using the Order.create method, which includes the attributes: orderedBy, deliveryLocation, lineItem and billingAddress.
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
            req.session.lineItems =  {};
            return res.redirect('/orderHistory/' + req.session.userId);

        }

    })
};