import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const {Pool} = pg;
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

export default pool;