import express from 'express';
import { createFolder , getFolders, deleteFolder } from '../controllers/folderController.js';

const router = express.Router();

router.get('/', getFolders);
router.post('/new', createFolder);
router.delete('/', deleteFolder);

export default router;