//finds the userType (from our database) with the name linestander and show them
var User = require('../../models/User');
var info = User.find({userType: 'linestander'});
const Product = require('../../models/Product.js');

module.exports = async (req,res)=>{
    const products = await Product.find({});
    await info.exec(function(err,user) {
        if(err) {
            console.log(err)
        }
        if(admin){
            res.render('registerLinestander',{
                users: user,
                products
            });
        }
        else return res.redirect('/error');
    });
};

