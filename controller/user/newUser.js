module.exports = (req,res)=>{
    res.render('register',{ //render register.ejs
        errors: req.session.validationErrors
    })
}