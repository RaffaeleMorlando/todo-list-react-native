import Todo from '../models/Todo.js';

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

export { getTodos, createTodo, deleteTodo };