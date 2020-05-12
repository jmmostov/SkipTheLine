const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// An order schema is created, which holds the attributes: orderedBy, status, pickedUpBy, deliveryLocation and lineItem.
const orderSchema = new Schema({
    orderedBy: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
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
    // Her angives en kommentar til hvor man er på RF.
    deliveryLocation: {
        type: String,
        required: true
    },
    lineItem: {

    }
});

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;