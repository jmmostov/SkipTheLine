module.exports = (req,res)=> {
    // We try to find all products created in the database
    //const products = Product.find({});
    let lineItems = req.session.lineItems;


    // We make an if/else, where we use the global variable "loggedIn" to check if the user is logged in as a customer
    if(loggedIn){
        // Now we respond with the page creating all our products from our database.
        res.render('order',{
            totalPrice: lineItems.totalPrice
        });
    }
    // The user will just be redirected to the register page
    else res.redirect('register');
};