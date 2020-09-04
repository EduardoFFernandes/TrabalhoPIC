const pool = require('../configDatabase')
var hospitalCrudController = {}
var tableName = 'hospital'

hospitalCrudController.getAllHospital = (request, response) => {
    pool.query(
        'SELECT hos.id,nome,endereco,cep FROM '+ tableName +' hos' +
        ' INNER JOIN endereco en' +
        ' ON hos.id_endereco = en.id' +
        ' ORDER BY hos.nome'
    , (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).render('./hospital/listHospital',{data:results.rows})
    })
}

hospitalCrudController.getHospitalById = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('SELECT * FROM '+ tableName +' WHERE id = $1', [id], (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).render('./hospital/editHospital',{data:results.rows})
    })
}

hospitalCrudController.createHospital = (request, response) => {
  const { nome, id_endereco } = request.body

  pool.query('INSERT INTO '+ tableName +' (nome, id_endereco) VALUES ($1, $2) RETURNING id', [nome, id_endereco], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).redirect('/list-hospital')
  })
}

hospitalCrudController.updateHospital = (request, response) => {
  const { id, nome, id_endereco } = request.body

  pool.query(
    'UPDATE '+ tableName +' SET nome = $1, id_endereco = $2 WHERE id = $3',
    [nome, id_endereco, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).redirect('/list-hospital')
    })
}

hospitalCrudController.deleteHospital = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('DELETE FROM '+ tableName +' WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      } 
    response.status(200).redirect('/list-hospital')
    })  
}

module.exports = hospitalCrudController