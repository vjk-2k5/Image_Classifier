import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Card, CardHeader, CardContent, CardFooter } from '../components/Card';
import { Button } from '../components/Button';
import { Sidebar } from '../components/Sidebar';
import { DashboardNavBar } from '../components/DashBoardNavBar';
import { SheetDemo } from '../components/Profile';

export const Dashboard = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1">
        {/* Header */}
        <DashboardNavBar />
    <div className="flex justify-around items-center h-screen bg-gray-100">
      {/* Image Classifier Card */}
      <Card className="max-w-xs bg-blue-800 text-white rounded-lg shadow-lg p-6">
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
            className="bg-white text-blue-800 hover:bg-blue-600 hover:text-white"
            onClick={() => navigate('/image-classifier')} // Use navigate for routing
          >
            Go to Classifier
          </Button>
        </CardFooter>
      </Card>

      {/* Image Recognizer Card */}
      <Card className="max-w-xs bg-blue-900 text-white rounded-lg shadow-lg p-6">
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
            className="bg-white text-blue-900 hover:bg-blue-700 hover:text-white"
            onClick={() => navigate('/image-recognizer')} // Use navigate for routing
          >
            Go to Recognizer
          </Button>
        </CardFooter>
      </Card>

      {/* Placeholder Card */}
      <Card className="max-w-xs bg-blue-950 text-white rounded-lg shadow-lg p-6">
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
    </div>
    </div>
  );
};

export default Dashboard;
