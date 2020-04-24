const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//An orderschema is created, which holds the attributes: orderedBy, status, pickedUpBy, deliveryLocation, lineItem and billingAddress, which has even further informations about the address to be able to tell the different information apart from one another.
const orderSchema = new Schema({
    orderedBy: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    /*
    // The status of the order. It's true by default because it's ongoing.
    pickedUp: {
        type: Boolean,
        default: false
    },
    delivered: {
        type: Boolean,
        default: false
    },

     */
    status: {
        type:[{
            type: String,
            enum: [
                "pending",
                "ongoing",
                "completed"
            ]
        }],
        default: ["pending"]
    },

    pickedUpBy:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
    },

    deliveryLocation: {
        type: String,
        required: true
    },// Her angives en kommentar til hvor man er på RF.
    lineItem: {
        //ref: 'LineItem'
    }
});

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;