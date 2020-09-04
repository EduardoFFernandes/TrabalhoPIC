const pool = require('../configDatabase')
var pacienteCrudController = {}
var tableName = 'paciente'

pacienteCrudController.getAllPaciente = (request, response) => {
    pool.query('SELECT * FROM '+ tableName +' ORDER BY id', (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).render('./paciente/listPaciente',{data:results.rows})
    })
}

pacienteCrudController.getAllPacienteAJAX = (request, response) => {
  pool.query('SELECT * FROM '+ tableName +' ORDER BY id', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).send(results.rows)
  })
}

pacienteCrudController.getPacienteById = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('SELECT * FROM '+ tableName +' WHERE id = $1', [id], (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).render('./paciente/editPaciente',{data:results.rows})
    })
}

pacienteCrudController.createPaciente = (request, response) => {
  const { nome, cep } = request.body

  pool.query('INSERT INTO '+ tableName +' (nome, cep) VALUES ($1, $2) RETURNING id', [nome, cep], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).redirect('/list-paciente')
  })
}

pacienteCrudController.updatePaciente = (request, response) => {
  const { id, nome, cep } = request.body

  pool.query(
    'UPDATE '+ tableName +' SET Paciente = $1, cep = $2 WHERE id = $3',
    [nome, cep, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).redirect('/list-paciente')
    })
}

pacienteCrudController.deletePaciente = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('DELETE FROM '+ tableName +' WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      } 
    response.status(200).redirect('/list-paciente')
    })  
}

module.exports = pacienteCrudController