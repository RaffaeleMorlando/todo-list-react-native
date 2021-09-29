import express from 'express';
import { getTodos, createTodo, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.route('/')
  .get(getTodos)
  .delete(deleteTodo);
router.post('/new', createTodo);


export default router;