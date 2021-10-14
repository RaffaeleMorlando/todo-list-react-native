// ----------------------------------------
// MYSQL
// ----------------------------------------

import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

  // const conn = mysql.createConnection({
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   port: process.env.DB_PORT,
  //   database: process.env.DATABASE_NAME,
  // });
  
  // conn.connect(error => {
  //   console.log(`Connected to database: ${process.env.DATABASE_NAME} on port ${process.env.DB_PORT}`);
  // })
  
  // export default conn;

  // ----------------------------------------
  // POOLING
  // ----------------------------------------

  const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DATABASE_NAME,
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  });
  
  pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log(`Connected as ID ${connection.threadId}`);
  })

  export default pool;