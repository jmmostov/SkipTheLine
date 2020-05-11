var User = require('../../models/User');

//Creates a callfunction that finds all the users with the userType linestander.
module.exports = async (req,res) =>{

    await User.find({userType: 'linestander'}, function (err,user) {
        if(err) {
            console.log('Fejlen er: ' + err)
        }
        //If the admin is logged in then it should response with the registerLinestander.ejs page.
        if(admin) {
            res.render('registerLinestander', {
                users: user,
            })
        }
        else return res.redirect('/error')
    })
}