import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './layouts/DashBoardLayout'; 
import ImgClasMainLayout from './layouts/ImgClasMainLayout'; 
import LoginPage from './layouts/LoginPageLayout'; 
import ImgRegLayout from './layouts/ImgRegLayout'; 
import SettingsLayout from './layouts/SettingsLayout'; 
import HistoryLayout from './layouts/HistoryLayout';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} /> 
          <Route path="/image-classifier" element={<ProtectedRoute element={<ImgClasMainLayout />} />} /> 
          <Route path="/image-recognizer" element={<ProtectedRoute element={<ImgRegLayout />} />} /> 
          <Route path="/settings" element={<ProtectedRoute element={<SettingsLayout />} />} />
          <Route path="/history" element={<ProtectedRoute element={<HistoryLayout />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
