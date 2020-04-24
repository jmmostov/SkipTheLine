const mongoose = require('mongoose')
const Schema = mongoose.Schema

//we create a schema, that specifies what an address should consist of.
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