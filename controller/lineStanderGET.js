const Order = require('../models/Order.js');


module.exports = async (req,res)=> {
    // We try to find all products created in the database
    const order = await Order.find({});


    // Now we respond with the page creating all our products from our database.
    res.render('lineStander',{
        order
    });
};