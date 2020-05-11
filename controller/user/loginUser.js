// We need bcrypt to unhash (?) the password to check if it's the right password.
const bcrypt = require('bcrypt')
const User = require('../../models/User')

module.exports = (req,res)=>{
    const { username,password } = req.body;

    User.findOne({username:username},(error,user)=>{
        // Admin is hardcoded in the database, so we don't need to use bcrypt.
        if(username == "admin" && password == "admin123") {
            //console.log(user);
            if (user.userType == "admin") {
                // The line below is done because we want to use this "req.session.userId" later to see if the user is logged
                // in as a customer. And what better way than to assign the logged in users _id to the session
                req.session.adminCheck = user.userType;
            }
            /*TODO: Har vi lavet linjen nedenfor for at admin også kan bevæge sig rundt som user? Ellers synes jeg vi skal slette den*/
            // req.session.userId = user._id
            // Redirect to the admin's "front page" if you will
            res.redirect('/registerLinestander')
        }
        else if(user){
            bcrypt.compare(password,user.password,(error,same)=>{
                if(same && user.userType == "customer") {
                    //henter id for brugeren og gemmer det i browserens session. 
                    req.session.userId = user._id
                    res.redirect('/')
                }
                else if(same && user.userType == "linestander") {
                    req.session.LSid = user._id
                    res.redirect('/lineStander')
                }
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