import Folder from '../models/Folder.js';


// ---------------------------------------------
// MONGODB
// ---------------------------------------------

const getFolders = async (req, res) => {

  // ----------------------------------------
  // MONGODB
  // ----------------------------------------

  try {
    const folders = await Folder.find();
    res.status(200).json(folders);
  } catch (error) {
    res.status(400).json(error.message);
  }

  // ----------------------------------------
  // MYSQL
  // ----------------------------------------

  // Folder.getFolders((err, data) => {
  //   if (err)
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving customers."
  //     });
  //   else res.status(200).json(data);
  // });
  
}

const createFolder = async ( req, res) => {
  const data = req.body;
  const folder = await new Folder(data);
  try {
    folder.save();
    res.status(200).json(folder);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const deleteFolder = async (req, res) => {
  const {_id} = req.body;
  try {
    const response = await Folder.findByIdAndRemove(_id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

// ---------------------------------------------
// MYSQL
// ---------------------------------------------

// ---------------------------------------------
// getFoldersMysql effettua la query
// poi il risultato viene passato nella callback
// ---------------------------------------------

const getFoldersMySql = (req, res) => {

  Folder.getFolders((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.sqlMessage || "Some error occurred while retrieving customers."
      });
    else res.status(200).json(data);
  });
}

const createFolderMySql = (req, res) => {

  const folder = new Folder({
    folder_name: req.body.folder_name,
    private: req.body.private,
  });

  Folder.createFolder(folder,(err,data) => {
    if(err) {
      res.status(500).send({ message: err.sqlMessage });
    } else {
      res.status(200).json(data);
    }
  })

}

const deleteFolderMySql = (req, res) => {
  const { _id } = req.body;

  Folder.deleteFolder(_id, (err, data) => {
    if(err) {
      res.status(500).send({ message: err.sqlMessage });
    } else {
      res.status(200).json(data);
    }
  })

}


export { 
  createFolder, getFolders, deleteFolder, 
  getFoldersMySql, createFolderMySql, deleteFolderMySql 
};