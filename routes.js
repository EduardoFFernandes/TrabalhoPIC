var userController = require("./controller/userController.js");
var pacienteController = require("./controller/pacienteController");
var enderecoController = require("./controller/enderecoController");
var hospitalController = require("./controller/hospitalController");
var medicamentoController = require("./controller/medicamentoController");
module.exports = function(app){
    
    app.get('/css/style.css', (req,res) =>{
        res.sendFile(__dirname + '/css/style.css')
    })

    app.get('/js/javascript.js',(req,res) =>{
        res.sendFile(__dirname + '/js/javascript.js')
    })

    app.get('/', userController.getUsers)

    app.get('/users', userController.getUsers)

    app.get('/updateUser/:id?', userController.getUserById)

    app.post('/updateUser/:id?', userController.updateUser)

    app.get('/editUser', (req, res) => {
        res.render('./user/editUser')
    })

    app.post('/editUser', userController.createUser)

    app.get('/deleteUser/:id', userController.deleteUser)
    
    app.get('/datatableView', (req, res) => {
        res.render('datatable')
    })

    app.get('/datatableData', userController.getUsersDatatable)

    app.post('/updateDatatable', userController.updateDatatable)

    app.get('/wijmo', (req,res) =>{
        res.render('./user/wijmo')
    })
    app.get('/js/controls/wijmo.min.js',(req,res) =>{
        res.sendFile(__dirname + '/js/controls/wijmo.min.js')
    })
    app.get('/js/controls/wijmo.grid.min.js',(req,res) =>{
        res.sendFile(__dirname + '/js/controls/wijmo.grid.min.js')
    })
    app.get('/js/controls/wijmo.grid.search.min.js',(req,res) =>{
        res.sendFile(__dirname + '/js/controls/wijmo.grid.search.min.js')
    })
    app.get('/css/wijmo.min.css',(req,res) =>{
        res.sendFile(__dirname + '/css/wijmo.min.css')
    })

    app.get('/endereco', (req, res) => {
        res.render('./endereco/createEndereco')
    })

    app.get('/endereco/:id?', enderecoController.getEnderecoById)
    
}