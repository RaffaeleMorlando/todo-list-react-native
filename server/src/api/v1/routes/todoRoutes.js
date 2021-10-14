import express from 'express';
import { getTodos, createTodo, deleteTodo, getTodosMySql, createTodoMySql, deleteTodoMySql} from '../controllers/todoController.js';

const router = express.Router();

// router.get('/:id',getTodos)
// router.route('/').delete(deleteTodo);
// router.post('/new', createTodo);

router.get('/:id', getTodosMySql)
router.post('/new', createTodoMySql);
router.delete('/', deleteTodoMySql);


export default router;