
const User = require('../../models/User');


module.exports = async (req,res)=> {

    // We find all addresses and the logged in customer so we can use them in the ejs:
    let user = await User.find({_id: req.session.userId});
    //let address = await Address.find({});


    if (loggedIn) {

        // We want to send the logged in user's billing_address_id as a variable when we render the site.
        // Therefore we make a for loop to access user's billing_address_id. We assign this _id to the session so we can
        // access it outside the loop too.
        for (let i = 0; i < user.length; i++) {
            req.session.address = user[i].billingAddressId
        }

        // Now we create a variable and assign the address_id from the session to the variable.
        // We have tried to just send the _id via the session, but somehow we can't do an if statement with this ObjectId.
        // Therefore we make it a string and compare it with "==" so both the ObjectId and the string can be compared.
        let idString = req.session.address.toString();


        res.render('addressChange', {
            user: idString
        })
    }
}