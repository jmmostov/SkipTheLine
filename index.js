const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/skiptheline', {useNewUrlParser: true});

const http = require('http')
const server = http.createServer((req,res)=>{

})

app.listen(3000,()=>{
    console.log("App listening on port 3000")
});

