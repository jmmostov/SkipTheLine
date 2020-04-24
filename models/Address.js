const mongoose = require('mongoose')
const Schema = mongoose.Schema

//we create a schema, that specifies what an address should consist of.
const addressSchema = new Schema({
    street_name: {
        type: String,
        required: true,
    },
    street_nr: {
        type: Number,
        required: true
    },
    zipcode: {
            type: Number,
            required: true
        },

        city_name: {
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