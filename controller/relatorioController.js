const pool = require('../configDatabase')
var relatorioCrudController = {}
var tableName = 'relatorio_paciente'
const magnitudeName = ["Assintomaticos", "Sintomas Leves", "Paciente Estável", "Grave", "Muito Grave"]

relatorioCrudController.getRelatorioAJAX = (request, response) => {
    pool.query('SELECT * FROM '+ tableName +' ORDER BY magnitude', (error, results) => {
      if (error) {
          throw error
      }
      results.rows.forEach(x => {
          x.count =  parseInt(x.count)
          x.magnitude = magnitudeName[x.magnitude - 1]
      })
      response.status(200).send(results.rows)
    })
}



module.exports = relatorioCrudController