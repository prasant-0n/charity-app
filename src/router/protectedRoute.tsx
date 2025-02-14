import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated =
    /* logic to check if the user is authenticated */ true;

  return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
