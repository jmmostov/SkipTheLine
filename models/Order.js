const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectID,
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
    lineItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LineItem', required: true
    }, // Ret til, når LineItem er klar
    billingAddress: {
        customerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'customerID',
            required: true
        }, // Ret til, når User er klar
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