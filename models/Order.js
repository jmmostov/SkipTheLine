const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    user: {
        type: moongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    status: { 
        type: Boolean, 
        default: true 
    },
    deliveryLocation: {
        type: String,
        required: true
    },// kommentar til hvor man er på RF.
/*
    lineItem: {
        ref: 'LineItem',
    }, */// Ret til, når LineItem er klar
    billingAddress: {
        streetName: {
            type: String,
            required: true
        },
        streetNr: {
            type: Number,
            required: true
        },
        zipCode: {
            type: Number,
            required: true
        },
        city: {
            type:
            String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }
});

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;