import express from 'express';
import auth from '../middleware/auth.js';
import { getMissings, createMissing, updateMissing, deleteMissing } from '../controllers/missings.js';

const router = express.Router();
router.get('/', getMissings);
router.post('/', auth, createMissing);
router.patch('/:id', auth, updateMissing); 
router.delete('/:id', auth, deleteMissing);

export default router;