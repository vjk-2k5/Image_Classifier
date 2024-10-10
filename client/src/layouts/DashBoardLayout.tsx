import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Card, CardHeader, CardContent, CardFooter } from '../components/Card';
import { Button } from '../components/Button';

export const Dashboard = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  return (
    <div className="flex justify-around items-center h-screen bg-gray-100">
      {/* Image Classifier Card */}
      <Card className="max-w-xs bg-purple-600 text-white rounded-lg shadow-lg p-6">
        <CardHeader className="text-center">
          <h2 className="text-4xl font-bold">Image Classifier</h2>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Classify uploaded images based on different categories.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="bg-white text-purple-600 hover:bg-purple-800 hover:text-white"
            onClick={() => navigate('/image-classifier')} // Use navigate for routing
          >
            Go to Classifier
          </Button>
        </CardFooter>
      </Card>

      {/* Image Recognizer Card */}
      <Card className="max-w-xs bg-purple-700 text-white rounded-lg shadow-lg p-6">
        <CardHeader className="text-center">
          <h2 className="text-4xl font-bold">Image Recognizer</h2>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Upload an image and recognize objects or patterns in it.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="bg-white text-purple-700 hover:bg-purple-900 hover:text-white"
            onClick={() => navigate('/image-recognizer')} // Use navigate for routing
          >
            Go to Recognizer
          </Button>
        </CardFooter>
      </Card>

      {/* Placeholder Card */}
      <Card className="max-w-xs bg-purple-800 text-white rounded-lg shadow-lg p-6">
        <CardHeader className="text-center">
          <h2 className="text-4xl font-bold">Coming Soon</h2>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Placeholder for future functionality.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button disabled className="bg-gray-500 text-gray-300 cursor-not-allowed">
            Stay Tuned
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
