import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    // ref: User
  },
  title: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    required: false,
    default: false
  }
},
{ timestamps: true }
);


const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
