//delete user via objectId
var Products = require('../models/Product');

module.exports = async function (req,res) {
    await Products.findByIdAndDelete({"_id": req.params.id}, (err, product)=> {
        if(err) {
            console.log(err);
        }
        res.end();
        // return res.redirect('/registerLinestander')
    });
};