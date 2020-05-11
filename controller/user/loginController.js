//If there is a request for the login page, then it responses with th login.ejs.
module.exports = (req,res)=>{
    res.render('login') //render login.ejs
}