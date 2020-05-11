//whenever a user wants to log out, then the session will be destroyed. This is because we save the user._id on the user that is logged in, in the session of the browser.
module.exports = (req,res) => {
    req.session.destroy(()=>{
        res.redirect('/')
    })
}