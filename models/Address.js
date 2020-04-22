const mongoose = require('mongoose')
const Schema = mongoose.Schema

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