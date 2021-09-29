import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';
import connectDB from './config/db.js';


// ACCESSO AL FILE .ENV
dotenv.config();

// CONNESSIONE A MONGODB
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// MIDDLEWATE APPLICATO SUL PATH '/api/v1/todo'
app.use('/api/v1/todo', todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
