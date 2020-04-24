const Product = require('../../models/Product.js');
const path = require('path');
//Uses the create function on the constant Products that holds data from the model Product.
module.exports = (req,res)=>{
    Product.create(req.body,(error,product)=>{
        if(error){
            return res.redirect ('/login')
        }
        else//When the product is created, then the product should be logged in the console, and we are send to the ejs adminProducts.
            console.log(product)
            return res.redirect('/adminProducts');
    })
    /*if(req.session.userId) {
        return res.render('create');
    }
    res.redirect('/auth/login')

     */
};


