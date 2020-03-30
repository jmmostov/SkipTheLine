const express = require('express');
const router = express.Router();

const productGET = require('../controller/productGET');
const productPOST = require('../controller/productPOST');


// We try to show all products from the database.
router.get('/products',productGET);

// We try to post the newly added product to the database.
router.post('/product/new',productPOST);


module.exports = router;