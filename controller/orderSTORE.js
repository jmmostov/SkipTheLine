const Order = require('../models/Order');

module.exports = (req,res)=>{
    Order.create({
        user: req.session.userId,
        deliveryLocation: req.body.deliveryLocation,
        lineItem: req.session.lineItems,
        billingAddress:{
          streetName: req.body.streetName,
          streetNr: req.body.streetNr,
          zipCode: req.body.zipCode,
          city: req.body.city,
          country: req.body.country
        }
    }, (error,Order)=>{
        if(error) {
            console.log(error)
            return res.redirect('/lineItems')
        }
        else {
            res.redirect('/');
            console.log(Order)
        }

    })
};