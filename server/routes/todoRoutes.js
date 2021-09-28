import express from 'express';
import { getTodos, createTodo } from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/new', createTodo);


export default router;