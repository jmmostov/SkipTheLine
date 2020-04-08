const Order = require('../models/Order.js');


module.exports = async (req,res)=> {
    // We try to find all products created in the database
    const order = await Order.find({pickedUp: false });

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
    res.render('lineStander',{
        order,

        //orders: orderArray()
    });
};