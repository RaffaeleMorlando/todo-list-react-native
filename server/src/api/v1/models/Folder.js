// ----------------------------------------
// MONGODB
// ----------------------------------------

// import mongoose from 'mongoose';

// const folderSchema = new mongoose.Schema({
//   folder_name: { 
//     type: String, required: true 
//   },
//   todo_ids: { 
//     type: Array , required: false 
//   },
// }, { timestamps: true}
// );

// const Folder = mongoose.model('Folder', folderSchema);

// export default Folder;


// ----------------------------------------
// MYSQL
// ----------------------------------------

import sql from '../../../config/dbMysql.js';

// ----------------------------------------
// *** TIPS ***
//
// CONSTRUCTOR
// ----------------------------------------

const Folder = function(Folder) {
  this.folder_name = Folder.folder_name;
  this.private = Folder.private;
};

Folder.getFolders = (result) => {

  sql.query("SELECT * FROM folders", (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Folder.createFolder = (newFolder, result) => {
  //-----------------------------------------------
  // *** TIPS ***
  // ? nella query è un placeholder 
  // che viene sostituito dai valori di newFolder
  //-----------------------------------------------
  const query = sql.query("INSERT INTO folders SET ?", newFolder, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newFolder });
  });
};

Folder.deleteFolder = (folderId, result) => {
  
  sql.query('DELETE FROM folders WHERE id = ?', folderId, (err, res) => {
    if(err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })

}

export default Folder;

