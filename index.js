const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/skiptheline', {useNewUrlParser: true});

const http = require('http')
const server = http.createServer((req,res)=>{

})

server.listen(3000)

