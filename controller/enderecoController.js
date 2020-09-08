const pool = require('../configDatabase')
var enderecoCrudController = {}
var tableName = 'endereco'

enderecoCrudController.getAllEndereco = (request, response) => {
    pool.query('SELECT * FROM '+ tableName +' ORDER BY id', (error, results) => {
      if (error) {
          throw error
      }
      results.rows.forEach(element => {
        var cep = element.cep
        element.cep = cep.substring(0, 5) + '-' + cep.substring(5,9)
      });
      
      response.status(200).render('./endereco/listEndereco',{data:results.rows})
    })
}

enderecoCrudController.getAllEnderecoAJAX = (request, response) => {
  pool.query('SELECT * FROM '+ tableName +' ORDER BY id', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).send(results.rows)
  })
}

enderecoCrudController.getEnderecoById = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('SELECT * FROM '+ tableName +' WHERE id = $1', [id], (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).render('./endereco/editEndereco',{data:results.rows})
    })
}

enderecoCrudController.createEndereco = (request, response) => {
  const { endereco, cep } = request.body

  pool.query('INSERT INTO '+ tableName +' (endereco, cep) VALUES ($1, $2) RETURNING id', [endereco, cep], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).redirect('/list-endereco')
  })
}

enderecoCrudController.updateEndereco = (request, response) => {
  const { id, endereco, cep } = request.body

  pool.query(
    'UPDATE '+ tableName +' SET endereco = $1, cep = $2 WHERE id = $3',
    [endereco, cep, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).redirect('/list-endereco')
    })
}

enderecoCrudController.deleteEndereco = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('DELETE FROM '+ tableName +' WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      } 
    response.status(200).redirect('/list-endereco')
    })  
}

module.exports = enderecoCrudController