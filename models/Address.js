const mongoose = require('mongoose')
const Schema = mongoose.Schema

// We create a schema, that specifies what an address should consist of.
// The
const addressSchema = new Schema({
    streetName: {
        type: String,
        required: [true, 'Please fill in yout street name'],
    },
    streetNr: {
        type: String
    },
    zipCode: {
            type: Number,
            required: [true, 'Please provide zipCode']
        },

    city: {
        type: String,
        required: [true, 'Please write your city name']
    },
    country: {
    type: String,
        required: [true, 'Remember to fill in your country']
    }
})

const Address = mongoose.model('Address',addressSchema);
module.exports = Address;