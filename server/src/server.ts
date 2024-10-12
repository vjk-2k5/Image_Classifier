import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import imageRoutes from './routes/imageRoutes';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

dotenv.config(); 

const app = express();

connectDB();

app.use(express.json());

app.use(cors());
app.use('/api/images', imageRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/user',userRoutes)

//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
