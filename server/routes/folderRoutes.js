import express from 'express';
import { createFolder , getFolders} from '../controllers/folderController.js';

const router = express.Router();

router.get('/', getFolders);
router.post('/new', createFolder);

export default router;