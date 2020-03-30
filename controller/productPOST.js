const Product = require('../models/Product.js');
const path = require('path');

module.exports = (req,res)=>{
    Product.create(req.body,(error,product)=>{
        if(error){
            return res.redirect ('/login')
        }
        else
            console.log(product)
            return res.redirect('/registerLinestander');
    })
    /*if(req.session.userId) {
        return res.render('create');
    }
    res.redirect('/auth/login')

     */
};


