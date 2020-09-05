const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '32599344',
    port: 5432,
  })