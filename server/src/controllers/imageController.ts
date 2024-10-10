import { Request, Response } from 'express';
import { exec } from 'child_process';
import { ImageModel } from '../models/ImageModel';

export const uploadImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const imagePath = req.file?.path; 

    // TODO ## Change script tmrw
    exec(`python ../scripts/classify_image.py --image ${imagePath}`, async (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send('Error processing image');
        return;
      }

      const result = JSON.parse(stdout); 

      const image = new ImageModel({
        imagePath,
        classificationResult: result.class,
        accuracy: result.accuracy,
      });

      await image.save();
      res.json({ classification: result.class, accuracy: result.accuracy });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
};
