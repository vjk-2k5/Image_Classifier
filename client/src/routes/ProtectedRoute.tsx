import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute: React.FC<{ element: JSX.Element } & RouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/" replace />; 
};

export default ProtectedRoute;
