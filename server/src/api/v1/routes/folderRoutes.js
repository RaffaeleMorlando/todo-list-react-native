import express from 'express';
import { createFolder , getFolders, deleteFolder, getFoldersMySql, createFolderMySql, deleteFolderMySql} from '../controllers/folderController.js';

const router = express.Router();

//------------------------------------
// MONGODB
//------------------------------------

// router.get('/', getFolders);
// router.post('/new', createFolder);
// router.delete('/', deleteFolder);

//------------------------------------
// MYSQL
//------------------------------------

router.get('/', getFoldersMySql);
router.post('/new', createFolderMySql);
router.delete('/', deleteFolderMySql);

export default router;