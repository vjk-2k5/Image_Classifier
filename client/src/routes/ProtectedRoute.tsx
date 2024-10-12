import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getToken } from '../utils/jwt';

const ProtectedRoute: React.FC<{ element: JSX.Element } & RouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const token = getToken();

  if (!token) {
    return <Navigate to="/" />;
    
  }
  return isAuthenticated ? element : <Navigate to="/dashboard" replace />; 
};

export default ProtectedRoute;
