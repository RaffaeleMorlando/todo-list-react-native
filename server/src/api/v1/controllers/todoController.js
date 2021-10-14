import Todo from '../models/Todo.js';

// ---------------------------------------------
// MONGODB
// ---------------------------------------------

const getTodos = async (req,res) => {
  const { id } = req.params;
  try {
    const todos = await Todo.find({folder_id: id});
    res.status(200).json(todos);
  } catch (error) {
    res.status(400);
  }

}

const createTodo = async (req,res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(error.message);
  }

}

const deleteTodo = async (req, res) => {
  const {_id} = req.body;
  try {
    const response = await Todo.findByIdAndRemove(_id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

// ---------------------------------------------
// MYSQL
// ---------------------------------------------

const getTodosMySql = (req, res) => {

  const { id } = req.params;

  Todo.getTodos(id, (err, data) => {
    if(err) {
      res.status(500).send({ message: err.sqlMessage });
    } else {
      res.status(200).json(data);
    }
  })

}

const createTodoMySql = (req,res) => {

  const todo = new Todo({
    name: req.body.title,
    status: 0,
    folder: req.body.folder_id,
  });


  Todo.createTodo(todo, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.sqlMessage });
    } else {
      res.status(200).json(data);
    }
  });

}

const deleteTodoMySql = (req, res) => {

  const { id } = req.body;

  Todo.deleteTodo(id, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.sqlMessage });
    } else {
      res.status(200).json(data);
    }
  })
  
}

export { 
  getTodos, createTodo, deleteTodo,
  getTodosMySql, createTodoMySql, deleteTodoMySql
};