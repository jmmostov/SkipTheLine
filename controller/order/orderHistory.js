const Order = require('../../models/Order');

module.exports = async (req,res)=> {
    // We find all the orders that has the logged in user as the "orderedBy" on an order.
    const order = await Order.find({orderedBy: req.session.userId});

    // Now we respond with the rendering of orderHistory with all the orders found above.
    res.render('orderHistory',{
        order
    });
};