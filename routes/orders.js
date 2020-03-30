// https://www.youtube.com/watch?v=VKuY8QscZwY&t=407s

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/Order');
const lineItem = require('../models/lineItem'); // skal referere til lineItem når den implementeres.

//Incoming GET requests to orders. Find order.
router.get('/', (req, res, next) => {
    Order.find()
        .select('lineItem orderID status deliveryLocation billingAddress')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                orders: docs.map(doc => {
                    return {
                        orderID: doc.orderID,
                        user: doc.user,
                        lineItem: doc.lineItem,
                        status: doc.status,
                        deliveryLocation: doc.deliveryLocation,
                        billingAddress: doc.billingAddress,
                        request: {
                            type: 'GET',
                            url:  'http://localhost:3000/orders/' + doc.orderID
                        }
                        }
                    })
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

// create new order.
router.post('/', (req, res, next) => {
    lineItem.findById(req.session.userID) //skal rettes til ift. UserID/product ID... evt. body.userID
        .then(lineItem => {
            if(!lineItem) {
                return.res.status(404).json({
                    message: 'Product not found'
                });
            }
            const order = new Order({
                orderID: mongoose.Types.ObjectId(),
                user: req.body.user,
                lineItem: req.body.lineItem,
                status: req.body.status, // ikke sikker om den virker
                deliveryLocation: req.body.deliveryLocation,
                billingAddress: req.body.billingAddress //ikke sikker om den virker
            });
            return order
                .save()
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Order stored!',
                createdOrder: {
                    orderID: result.orderID,
                    user: result.user,
                    lineItem: result.lineItem,
                    status: result.status,
                    deliveryLocation: result.deliveryLocation,
                    billingAddress: result.billingAddress
                },
                request: {
                    type: 'GET'
                    url: 'http://localhost:3000/orders/' + result.orderID
                }
            })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        });
});


// tjek op på om det skal være et andet orderID ref, eks. orderId
router.get("/:orderID", (req, res, next) => {
    Order.findById(req.params.orderID)
        .exec()
        .then(order => {
            if(!order){
                return res.status(404).json({
                    message: 'Order not found'
                });
            }
            res.status(200).json({
              order: order
              request: {
                  type: 'GET'
                  url: 'http://localhost:3000/orders'
              }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});


// Delete order
router.delete(":/orderID", (req, res, next) => {
    Order.remove({ orderID: req.params.orderID})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Order deleted'
                request: {
                    type: 'POST'
                    url: 'http://localhost:3000/orders',
                    body: {
                        orderID: 'ID',
                        lineItemID: 'ID', //hent rigtig id
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
})

module.exports = router;