const pool = require('../configDatabase')
var enderecoCrudController = {}

enderecoCrudController.getEnderecoById = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('SELECT * FROM endereco WHERE id = $1', [id], (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).render('./endereco/editEndereco',{data:results.rows})
    })
}

module.exports = enderecoCrudController