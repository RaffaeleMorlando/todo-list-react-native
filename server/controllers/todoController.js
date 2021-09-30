import TodoModel from '../models/Todo.js';

const getTodos = async (req,res) => {
  
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400);
  }
}

const createTodo = async (req,res) => {
  const todo = new TodoModel(req.body);
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
    const response = await TodoModel.findByIdAndRemove(_id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export { getTodos, createTodo, deleteTodo };