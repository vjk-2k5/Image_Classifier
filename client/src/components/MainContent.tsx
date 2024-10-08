import React, { useState } from 'react';
import { Button } from "../components/Button"; // Adjust the import based on your structure

export const MainContent = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [classificationResult, setClassificationResult] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      // Simulate image classification (replace this with actual model prediction logic)
      setClassificationResult("Cat"); // Example classification result
      setAccuracy(95); // Example accuracy
    }
  };

  const handleImageReset = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setClassificationResult(null);
    setAccuracy(null);
  };

  return (
    <div className="flex flex-row p-8 space-x-8">
      {/* Left Column for Image Upload */}
      <div className="flex flex-col items-start w-1/2">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Upload an Image</h1>
        <div className="flex items-center mb-4 border border-blue-300 rounded-md bg-blue-50 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2M12 2v12m0 0l-4-4m4 4l4-4" />
          </svg>
          <Button
            variant="link"
            onClick={() => document.getElementById('file-input')?.click()} // Simulate clicking the file input
            className="flex-1 p-2 outline-none bg-transparent"
          >
            Upload Image
          </Button>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        {previewUrl && (
          <div className="flex flex-col items-center mt-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Image Preview:</h2>
            <img
              src={previewUrl}
              alt="Preview"
              className="w-64 h-auto border border-blue-300 rounded-md shadow-md"
            />
            <Button
              onClick={handleImageReset}
              className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Reset Image
            </Button>
          </div>
        )}
      </div>

      {/* Right Column for Classification Result */}
      <div className="flex flex-col items-start w-1/2">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Image Classification:</h2>
        <p className="text-blue-800">{classificationResult || "No classification yet."}</p>
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Accuracy:</h2>
        <p className="text-blue-800">{accuracy !== null ? `${accuracy}%` : "No accuracy data."}</p>
      </div>
    </div>
  );
};
