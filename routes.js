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


    //endereco Routes
    app.get('/list-endereco', enderecoController.getAllEndereco)
    app.get('/create-endereco', (req, res) => {
        res.render('./endereco/createEndereco')
    })
    app.get('/list-enderecoAJAX', enderecoController.getAllEnderecoAJAX)
    app.post('/create-endereco', enderecoController.createEndereco)
    app.get('/delete-endereco/:id', enderecoController.deleteEndereco)
    app.get('/edit-endereco/:id?', enderecoController.getEnderecoById)
    app.post('/edit-endereco/:id?', enderecoController.updateEndereco)

    //medicamento Routes
    app.get('/list-medicamento', medicamentoController.getAllMedicamento)
    app.get('/create-medicamento', (req, res) => {
        res.render('./medicamento/createMedicamento')
    })
    app.get('/list-medicamentoAJAX', medicamentoController.getAllMedicamentoAJAX)
    app.post('/create-medicamento', medicamentoController.createMedicamento)
    app.get('/delete-medicamento/:id', medicamentoController.deleteMedicamento)
    app.get('/edit-medicamento/:id?', medicamentoController.getMedicamentoById)
    app.post('/edit-medicamento/:id?', medicamentoController.updateMedicamento)

    //hospital Routes
    app.get('/list-hospital', hospitalController.getAllHospital)
    app.get('/create-hospital', (req, res) => {
        res.render('./hospital/createHospital')
    })
    app.get('/list-hospitalAJAX', hospitalController.getAllHospitalAJAX)
    app.post('/create-hospital', hospitalController.createHospital)
    app.get('/delete-hospital/:id', hospitalController.deleteHospital)
    app.get('/edit-hospital/:id?', hospitalController.getHospitalById)
    app.post('/edit-hospital/:id?', hospitalController.updateHospital)

    //paciente Routes
    app.get('/list-paciente', pacienteController.getAllPaciente)
    app.get('/create-paciente', (req, res) => {
        res.render('./paciente/createPaciente')
    })
    app.post('/create-paciente', pacienteController.createPaciente)
    app.get('/delete-paciente/:id', pacienteController.deletePaciente)
    app.get('/edit-paciente/:id?', pacienteController.getPacienteById)
    app.post('/edit-paciente/:id?', pacienteController.updatePaciente)
}