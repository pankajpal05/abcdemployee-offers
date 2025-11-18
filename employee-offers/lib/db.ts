import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.NEXT_PUBLIC_DB_USERNAME,
  host: process.env.NEXT_PUBLIC_DB_HOST,
  database: process.env.NEXT_PUBLIC_DB_DATABSENAME,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  port: 5432,
});

export default pool;
