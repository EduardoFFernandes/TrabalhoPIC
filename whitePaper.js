//paciente Routes
app.get('/list-paciente', pacienteController.getAllPaciente)
app.get('/create-paciente', (req, res) => {
    res.render('./paciente/createPaciente')
})
app.post('/create-paciente', pacienteController.createPaciente)
app.get('/delete-paciente/:id', pacienteController.deletePaciente)
app.get('/edit-paciente/:id?', pacienteController.getPacienteById)
app.post('/edit-paciente/:id?', pacienteController.updatePaciente)