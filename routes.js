var userController = require("./controller/userController.js");
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
        res.render('editUser')
    })

    app.post('/editUser', userController.createUser)

    app.get('/deleteUser/:id', userController.deleteUser)
    
    app.get('/datatableView', (req, res) => {
        res.render('datatable')
    })

    app.get('/datatableData', userController.getUsersDatatable)


}