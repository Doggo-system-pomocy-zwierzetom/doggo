import express from 'express';
import auth from '../middleware/auth.js';
import { getAdoptions, createAdoption, updateAdoption, deleteAdoption } from '../controllers/adoptions.js';

const router = express.Router();
router.get('/', getAdoptions);
router.post('/', auth, createAdoption);
router.patch('/:id', auth, updateAdoption); 
router.delete('/:id', auth, deleteAdoption);

export default router;