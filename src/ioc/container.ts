import { Pool } from 'pg';
require('dotenv').config();

const CONFIG = process.env;

const POOL = new Pool({
    user: CONFIG.DB_USER as string,
    host: CONFIG.DB_HOST as string,
    database: CONFIG.DB_NAME as string,
    password: CONFIG.DB_PASS as string,
    port: parseInt(CONFIG.DB_PORT as string, 10),
});

export { POOL, CONFIG };
