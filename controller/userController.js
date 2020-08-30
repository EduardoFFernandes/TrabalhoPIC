const pool = require('../configDatabase')

var userCrudController = {}

userCrudController.getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).render('users',{data:results.rows})
  })
}

userCrudController.getUserById = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).render('updateUser',{data:results.rows})
    })
}


userCrudController.createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email], (error, results) => {
    if (error) {
      throw error
    }

    response.status(201).redirect('/users')
  })
}

userCrudController.updateUser = (request, response) => {
  // const id = parseInt(request.params.id)
  const { id, name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).redirect('/users')
    }
  )
}

userCrudController.deleteUser = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      } 
    console.log("Successfully deleted.")
    response.status(200).redirect('/users')
    }
  )  
}

module.exports = userCrudController