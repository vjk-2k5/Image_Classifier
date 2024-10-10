import { Router } from 'express';
import upload from '../middleware/uploadImage';
import { uploadImage,getResults } from '../controllers/imageController';

const router = Router();

router.post('/upload', upload.single('image'), uploadImage);
router.get('/results', getResults);

export default router;
