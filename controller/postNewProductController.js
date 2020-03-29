const Product = require('../models/Product.js');
const path = require('path');
const express = require('express');



module.exports = (req,res)=>{
    Product.create(req.body,(error,product)=>{
        if(error){
            return res.redirect ('/error');
        }
        else return res.redirect('/');

    })
    /*if(req.session.userId) {
        return res.render('create');
    }
    res.redirect('/auth/login')

     */
};