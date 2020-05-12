module.exports = (req,res)=>{
    res.render('index');  //render index.ejs
    console.log(req.session)
}