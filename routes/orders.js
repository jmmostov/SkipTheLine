const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/Order');


//Incoming GET requests to orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = new Order({
        orderID: mongoose.Types.ObjectId(),
        user: req.body.user,
        lineItem: req.body.lineItem,
        status: req.body.status, // ikke sikker om den virker
        deliveryLocation: req.body.deliveryLocation,
        billingAddress: req.body.billingAddress //ikke sikker om den virker
    });
    order
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});