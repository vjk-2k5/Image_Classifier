import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './layouts/DashBoardLayout'; // Adjust the path as necessary
import ImgClasMainLayout from './layouts/ImgClasMainLayout'; // Adjust the path as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/image-classifier" element={<ImgClasMainLayout />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;



