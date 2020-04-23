//delete user via objectId
var Products = require('../models/Product');

//Uses findByIdAndDelete to find the product (.Products) with the proper id - and allows the admin to delete the product.
module.exports = async function (req,res) {
    await Products.findByIdAndDelete({"_id": req.params.id}, (err, product)=> {
        if(err) {
            console.log(err);
        }
        res.end();
        // return res.redirect('/registerLinestander')
    });
};