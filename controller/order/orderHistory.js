const Order = require('../../models/Order');

module.exports = async (req,res)=> {
    // We try to find all products created in the database
    //const products = Product.find({});
    const order = await Order.find({orderedBy: req.session.userId});


    // Now we respond with the page creating all our products from our database.
    res.render('orderHistory',{
        order
    });
};