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

// folderSchema.post('remove', removeLinkedDocuments);
// function removeLinkedDocuments(doc) {
//   // doc will be the removed Person document
//   Event.remove({_id: { $in: doc.eventsAttended }})
// }

const Folder = mongoose.model('Folder', folderSchema);

export default Folder;

