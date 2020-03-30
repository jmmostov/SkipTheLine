module.exports = (req,res)=>{
    res.render('index') //render register.ejs
    console.log(req.session)
}