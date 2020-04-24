const mongoose = require('mongoose')
const Schema = mongoose.Schema


const addressSchema = new Schema({
    streetName: {
        type: String,
        required: true,
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
        type: String,
        required: true
    },
    country: {
    type: String,
        required: true
    }
})

const Address = mongoose.model('Address',addressSchema);
module.exports = Address;