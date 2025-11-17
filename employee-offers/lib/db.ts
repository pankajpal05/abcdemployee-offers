import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_offers',
  password: 'Aditya@123',
  port: 5432,
});

export default pool;
