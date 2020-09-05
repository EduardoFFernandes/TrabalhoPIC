const pool = require('../configDatabase')
var medicamentoCrudController = {}
var tableName = 'medicamento'

medicamentoCrudController.getAllMedicamento = (request, response) => {
    pool.query('SELECT * FROM '+ tableName +' ORDER BY id', (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).render('./medicamento/listMedicamento',{data:results.rows})
    })
}

medicamentoCrudController.getMedicamentoById = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('SELECT * FROM '+ tableName +' WHERE id = $1', [id], (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).render('./medicamento/editMedicamento',{data:results.rows})
    })
}

medicamentoCrudController.createMedicamento = (request, response) => {
  const { nome, descricao } = request.body

  pool.query('INSERT INTO '+ tableName +' (nome, descricao) VALUES ($1, $2) RETURNING id', [nome, descricao], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).redirect('/list-medicamento')
  })
}

medicamentoCrudController.updateMedicamento = (request, response) => {
  const { id, nome, descricao } = request.body

  pool.query(
    'UPDATE '+ tableName +' SET nome = $1, descricao = $2 WHERE id = $3',
    [nome, descricao, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).redirect('/list-medicamento')
    })
}

medicamentoCrudController.deleteMedicamento = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('DELETE FROM '+ tableName +' WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      } 
    response.status(200).redirect('/list-medicamento')
    })  
}

module.exports = medicamentoCrudController