const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
  client:'pg',
  connection:{
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    ssl:{rejectUnauthorized:false}
  }
});

module.exports = {
  db
}
