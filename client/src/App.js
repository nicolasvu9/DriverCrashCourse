import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdministrativePage from './components/AdministrativePage'; 
import ProtectedRoute from './utils/ProtectedRoute';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<ProtectedRoute element={<AdministrativePage />} />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
