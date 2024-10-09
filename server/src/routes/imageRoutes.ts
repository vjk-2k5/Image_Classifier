import { Router } from 'express';
import upload from '../middleware/uploadImage';
import { uploadImage } from '../controllers/imageController';

const router = Router();

router.post('/upload', upload.single('image'), uploadImage);

export default router;
