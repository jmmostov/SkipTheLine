const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Der oprettes et schema til Order, som indeholder attributterne: orderedBy, status, pickedUpBy, deliveryLocation,
// lineItem og billingAddress, som indeholder en længere række informationer, som opstilles således, så man kan skelne mellem forskellig data.
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
    },
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