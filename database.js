const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '32599344',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    // response.status(200).json(results.rows)
    response.status(200).render('users',{data:results.rows})
  })
}

const getUserById = (request, response) => {
    if(request.params.id != null){
        const id = parseInt(request.params.id)
        pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).render('editUser',{users:results.rows})
        // response.status(200).json(results.rows)
        })
    } else {
        response.status(200).render('editUser')
    }
}

const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email], (error, results) => {
    if (error) {
      throw error
    }
//    alert(`User added with ID: ${results.rows[0].id}`)

    response.status(201).render('users')
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }  
      response.status(200)
    }
  )  
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}