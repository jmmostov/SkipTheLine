const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    // The status of the order. It's true by default because it's ongoing.
    pickedUp: {
        type: Boolean,
        default: false
    },
    delivered: { 
        type: Boolean, 
        default: false
    },
    deliveryLocation: {
        type: String,
        required: true
    },// kommentar til hvor man er på RF.
    lineItem: {
        //ref: 'LineItem'
    }, // Ret til, når LineItem er klar
    billingAddress: {
        // Ret til, når User er klar
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