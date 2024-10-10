import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './layouts/DashBoardLayout'; // Adjust the path as necessary
import ImgClasMainLayout from './layouts/ImgClasMainLayout'; // Adjust the path as necessary
import LoginPage from './layouts/LoginPageLayout'; // Adjust the path as necessary
import ImgRegLayout from './layouts/ImgRegLayout'; // Adjust the path as necessary
import SettingsLayout from './layouts/SettingsLayout'; // Adjust the path as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Login Page as initial route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
        <Route path="/image-classifier" element={<ImgClasMainLayout />} /> {/* Image Classifier route */}
        <Route path="/image-recognizer" element={<ImgRegLayout />} /> {/* Image Recognizer route */}
        <Route path="/settings" element={<SettingsLayout />} /> {/* Settings route */}
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;




