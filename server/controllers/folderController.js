import Folder from '../models/Folder.js';

const getFolders = async (req, res) => {
  // console.log('getFolders');
  try {
    const folders = await Folder.find();
    res.status(200).json(folders);
  } catch (error) {
    res.status(400).json(error.message);
  }
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

export { createFolder, getFolders };