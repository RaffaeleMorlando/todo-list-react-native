import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

// Accede al file .env 
dotenv.config();

// Middleware applicato se il path è matchato
app.use('/api/v1/todo', todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})