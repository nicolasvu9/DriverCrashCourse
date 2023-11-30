import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const isAuthenticated = () => {
  return !!Cookies.get('access_token');
};

const isAdmin = () => {
  const role = Cookies.get('user_role');
  return role === 'admin';
};

const ProtectedRoute = ({ element }) => {
  if (!isAuthenticated() || !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
