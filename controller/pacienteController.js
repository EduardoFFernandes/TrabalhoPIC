const pool = require('../configDatabase')
var pacienteCrudController = {}
var tableName = 'paciente'

pacienteCrudController.getAllPaciente = (request, response) => {
    pool.query('SELECT * FROM '+ tableName +' ORDER BY id', (error, results) => {
      if (error) {
          throw error
      }
      results.rows.forEach(element => {
        var date = element.relatorio_data 
        dateString = date.getDate().toString().padStart(2,'0') + '/' + (date.getMonth() + 1).toString().padStart(2,'0')  + '/' + date.getFullYear() 
        element.relatorio_data = dateString
      });


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
      var date = results.rows[0].exame_data
      var dateString = date.toISOString()
      dateString = dateString.substring(0,dateString.lastIndexOf('T'))
      results.rows[0].exame_data = dateString
     
      var date2 = results.rows[0].relatorio_data 
      dateString = date2.toISOString()
      dateString = dateString.substring(0,dateString.lastIndexOf('T'))
      results.rows[0].relatorio_data = dateString
      
      response.status(200).render('./paciente/editPaciente',{data:results.rows})
    })
}

pacienteCrudController.createPaciente = (request, response) => {
  const { identificador, img_pulmao, id_hospital, id_medicamento, descricao, exame_data} = request.body
  var date = new Date()
  var date2 = new Date(exame_data)
  date2.setHours(date2.getHours() + 3)
 

  pool.query('INSERT INTO '+ tableName +' (identificador, img_pulmao,	id_hospital, id_medicamento,	descricao,	exame_data,	relatorio_data)' +
   'VALUES ($1, $2, $3, $4, $5, $6, $7) ', 
   [identificador, img_pulmao, id_hospital, id_medicamento, descricao, date2, date], 
   (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).redirect('/list-paciente')
  })
}

pacienteCrudController.updatePaciente = (request, response) => {
  const { id, identificador, img_pulmao, id_hospital, id_medicamento, descricao, exame_data} = request.body
  var date = new Date()
  var date2 = new Date(exame_data)
  date2.setHours(date2.getHours() + 3)

  pool.query(
    'UPDATE ' + tableName + ' SET identificador = $2, img_pulmao = $3, id_hospital = $4, id_medicamento = $5,' +
    '	descricao = $6,	exame_data = $7, relatorio_data = $8' +
    ' WHERE id = $1', 
    [ id, identificador, img_pulmao, id_hospital, id_medicamento, descricao, date2, date ],
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