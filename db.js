import dotenv from 'dotenv';
dotenv.config();
import {Pool} from 'pg';

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})