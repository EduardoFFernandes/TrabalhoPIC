const express = require('express')

const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const app = express()
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

require('./routes.js')(app)
//Template engine
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')

//Start Server
app.listen(8089,(req,res) => {
    console.log('Servidor está funcionando.')
})
