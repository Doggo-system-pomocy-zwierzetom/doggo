import express from 'express';
import { getShelters, updateShelter } from '../controllers/shelters.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.get('/', getShelters);
router.patch('/:id', auth, updateShelter); 
export default router;