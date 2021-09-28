const getTodos = async (req,res) => {
  console.log(req);
  try {
    res.status(500).json([
      {
        "test": "task-0",
        "text": "Hello"
      },
      {
        "test": "task-1",
        "text": "Hello"
      },
      {
        "test": "task-0",
        "text": "Hello"
      },
      {
        "test": "task-1",
        "text": "Hello"
      },
    ]);
  } catch (error) {
    res.status(400);
  }
}

const createTodo = async (req,res) => {}

export { getTodos, createTodo };