const Product = require('../../models/Product.js');

//Uses the .create-method to post the new Product using the schema from the Product-model.
module.exports = (req,res)=>{
    Product.create(req.body,(error,product)=>{
        // Callback function to check if something goes wrong.
        if(error){
            return res.redirect ('/login')
        }
        else
            // When the product is created, we use console.log to check if the product is created right,
            // and then we are redirected back to the ejs adminProducts.
            console.log(product)
            return res.redirect('/adminProducts');
    })
};


