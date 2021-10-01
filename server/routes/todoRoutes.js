import express from 'express';
import { getTodos, createTodo, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.get('/:id',getTodos)
router.route('/').delete(deleteTodo);
router.post('/new', createTodo);


export default router;