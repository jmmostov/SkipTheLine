let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const productSchema = new Schema ({
    imagePath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Product',productSchema);
