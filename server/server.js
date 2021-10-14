import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './src/api/v1/routes/todoRoutes.js';
import folderRoutes from './src/api/v1/routes/folderRoutes.js'

// import connectDB from './config/db.js';

// --------------------------------------
// ACCESSO AL FILE .ENV
// --------------------------------------
dotenv.config();

// --------------------------------------
// CONNESSIONE AL DATABASE MONGODB
// --------------------------------------
// connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------
// MIDDLEWARE
// --------------------------------------
app.use('/api/v1/todo', todoRoutes);
app.use('/api/v1/folder', folderRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})
