const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: '32599344',
    port: 5432,
  })