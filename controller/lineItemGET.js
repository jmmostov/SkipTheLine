LineItem = require('../models/LineItem');

//const Product = require('../models/Product.js');

module.exports = (req,res)=> {
    // We try to find all products created in the database
    //const products = Product.find({});

    let lineItems = new LineItem(req.session.lineItems ? req.session.lineItems: {});


    // Now we respond with the page creating all our products from our database.
    res.render('lineItems',{
        products: lineItems.gennerateArray(),
        totalPrice: lineItems.totalPrice
    });
};