// import mongoose from 'mongoose';

// const todoSchema = new mongoose.Schema({
//   author_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: false,
//     // ref: User
//   },
//   title: {
//     type: String,
//     required: true
//   },
//   checked: {
//     type: Boolean,
//     required: false,
//     default: false
//   },
//   folder_id: {
//     type: String,
//     required: true,
//   },
// },
// { timestamps: true }
// );


// const Todo = mongoose.model('Todo', todoSchema);

// export default Todo;


// ----------------------------------------
// MYSQL
// ----------------------------------------

import sql from '../../../config/dbMysql.js';

// ----------------------------------------
// *** TIPS ***
//
// CONSTRUCTOR
// ----------------------------------------

const Todo = function(Todo) {
  this.todo_name = Todo.name;
  this.todo_status = Todo.status;
  this.folder_id = Todo.folder;
};

Todo.getTodos = (id, result) => {
  sql.query('SELECT * FROM todos WHERE folder_id = ?', id, (err, res) => {
    if(err) {
      result(err,null)
    } else {
      result(null, res)
    }
  })
};

Todo.createTodo = (todo, result) => {
  sql.query('INSERT INTO todos SET ?', todo, (err, res) => {
    if(err) {
      result(err,null)
    } else {
      result(null, res)
    }
  })
};

Todo.deleteTodo = (id, result) => {
  sql.query('DELETE FROM todos WHERE id = ?', id, (err, res) => {
    if(err) {
      result(err,null)
    } else {
      result(null, res)
    }
  })
};


export default Todo;