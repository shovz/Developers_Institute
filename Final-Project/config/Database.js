import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const db = knex({
    client:'pg',
    connection:{
        // connectionString:process.env.DB_URI,
        host :process.env.DB_HOST,
        port :process.env.DB_PORT,
        user :process.env.DB_USER,
        password:process.env.DB_PASS,
        database: process.env.DB_NAME,
        ssl:{rejectUnauthorized:false}


    }
})


    export default db;