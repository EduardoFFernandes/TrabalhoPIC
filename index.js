const express = require('express')
const bodyParser = require('body-parser')
// const mysql = require('mysql')
const handlebars = require('express-handlebars')
const app = express()
const db = require('./database')
const urlencodeParser = bodyParser.urlencoded({extend:false})

//Template engine
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')


//Routes and Templates
// app.get('/id:id?',(req,res) =>{
//     // res.send('Essa é minha pagina inicial.')
//     // res.sendFile(projectDir + '/view/index.html')
//     res.render('index',{id:req.params.id})
// })
app.get('/css/style.css', (req,res) =>{
    res.sendFile(__dirname + '/css/style.css')
})
app.get('/js/javascript.js',(req,res) =>{
    res.sendFile(__dirname + '/js/javascript.js')
})
app.get('/users', db.getUsers)
app.get('/editUser/:id?', db.getUserById)
app.post('/editUser',urlencodeParser,db.createUser)

//Start Server
app.listen(8089,(req,res) => {
    console.log('Servidor está funcionando.')
})

