import mongoose from 'mongoose';

const folderSchema = new mongoose.Schema({
  folder_name: { 
    type: String, required: true 
  },
  todo_ids: { 
    type: Array , required: false 
  },
}, { timestamps: true}
);

const Folder = mongoose.model('Folder', folderSchema);

export default Folder;

