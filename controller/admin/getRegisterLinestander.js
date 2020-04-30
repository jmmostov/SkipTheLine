var User = require('../../models/User');
//Det eneste exec skulle, var at udføre linje 4 - jeg havde blot assignet User.find({...}) til en variabel 'info'
// og derfor skal man skrive exec foran
//var info = User.find({userType: 'linestander'});
const Product = require('../../models/Product.js');

/*
Alle userytype med typen 'linestander' bliver fundet og vist
Jeg udkommenterede exec (execute) da denne kode gør præcis det samme!
 */
module.exports = async (req,res) =>{
    //Er det en fejl at at I prøver at finde alle produkterne her? Produkterne bliver jo allerede fundet i adminProducts.js
   // const products = await Product.find({})
    await User.find({userType: 'linestander'}, function (err,user) {
        if(err) {
            console.log('Fejlen er: ' + err)
        }
        if(admin) {
            res.render('registerLinestander', {
                users: user,
              //  products
            })
        }
        else return res.redirect('/error')
    })
}
/*
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
};*/

