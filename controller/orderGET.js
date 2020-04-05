module.exports = (req,res)=> {
    // We try to find all products created in the database
    //const products = Product.find({});
    let lineItems = req.session.lineItems;


    // Now we respond with the page creating all our products from our database.
    res.render('order',{
        totalPrice: lineItems.totalPrice
    });
};