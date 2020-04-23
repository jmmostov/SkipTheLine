const Order = require('../models/Order.js');


module.exports = async (req,res)=> {
    //Shows the status of the order, using Order.find and matches the attribute in the Order Schema.
    const availableOrders = await Order.find({status: ["pending"] });
    const pickedUpOrders = await Order.find({status: ["ongoing"], pickedUpBy: LSCheck});
    const deliveredOrders = await Order.find({status: ["completed"], pickedUpBy: LSCheck});
   /*let orderArray = function(){
        let arr = [];

        for(let i = 0; i < order.length; i++) {
            for (let id in order[i].lineItem.items) {
                arr.push(order[i].lineItem.items[id]);
                }
            }
        console.log(arr);
        return arr
        }

    */


    // Now we respond with the page creating all our products from our database.
    if(LSCheck) {
        res.render('lineStander', {
            availableOrders,
            pickedUpOrders,
            deliveredOrders
        });
    }
    else
        return res.redirect('/error');


        //orders: orderArray()

};