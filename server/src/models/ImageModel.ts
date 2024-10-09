import { Schema, model, Document } from 'mongoose';

interface IImage extends Document {
  imagePath: string;
  classificationResult: string;
  accuracy: number;
  createdAt: Date;
}

const ImageSchema = new Schema<IImage>({
  imagePath: { type: String, required: true },
  classificationResult: { type: String, required: true },
  accuracy: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});


export const ImageModel = model<IImage>('Image', ImageSchema);
