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

//Routes and Templates
// app.get('/id:id?',(req,res) =>{
//     // res.send('Essa é minha pagina inicial.')
//     // res.sendFile(projectDir + '/view/index.html')
//     res.render('index',{id:req.params.id})
// })


//Start Server
app.listen(8089,(req,res) => {
    console.log('Servidor está funcionando.')
})
