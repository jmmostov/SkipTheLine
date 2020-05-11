// We need bcrypt to hash the password to check if it's the right password.
const bcrypt = require('bcrypt')
const User = require('../../models/User')

module.exports = (req,res)=>{
    const { username,password } = req.body;

    User.findOne({username:username},(error,user)=>{
        // Admin is hardcoded in the database, so we don't need to use bcrypt.
        if(username == "admin" && password == "admin123") {
            if (user.userType == "admin") {
                // The line below is done because we want to use this "req.session.userId" later to see if the user is logged
                // in as a customer. And what better way than to assign the logged in users _id to the session
                req.session.adminCheck = user.userType;
            }
            res.redirect('/registerLinestander')
        }
        //If it is a user, then compare the password passed in the inputfield to the password saved to the user. It if it is the same and the users usertype is customer.
            //Then save the users user._id to the session, and respond with the homepage.
        else if(user){
            bcrypt.compare(password,user.password,(error,same)=>{
                if(same && user.userType == "customer") {
                    //Gets the id for the user and save it in the session of the browser.
                    req.session.userId = user._id
                    res.redirect('/')
                }//The same happens for the userType linestander below:
                else if(same && user.userType == "linestander") {
                    req.session.LSid = user._id
                    res.redirect('/lineStander')
                }//redirect to login page if either the passwords does not match.
                else {
                    res.redirect('/login')
                }
            })
        }
        else {
            res.redirect('/login')
        }
    })
}