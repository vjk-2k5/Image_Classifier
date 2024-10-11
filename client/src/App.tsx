import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './layouts/DashBoardLayout'; 
import ImgClasMainLayout from './layouts/ImgClasMainLayout'; 
import LoginPage from './layouts/LoginPageLayout'; 
import ImgRegLayout from './layouts/ImgRegLayout'; 
import SettingsLayout from './layouts/SettingsLayout'; 
import HistoryLayout from './layouts/HistoryLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/image-classifier" element={<ImgClasMainLayout />} /> 
        <Route path="/image-recognizer" element={<ImgRegLayout />} /> 
        <Route path="/settings" element={<SettingsLayout />} />
        <Route path="/history" element={<HistoryLayout />} />
        </Routes>
    </Router>
  );
};

export default App;




