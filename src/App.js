import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import BookingForm from './components/BookingForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = (success) => {
    setIsAuthenticated(success);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isAuthenticated={isAuthenticated} />
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/book"
              element={
                isAuthenticated ? (
                  <BookingForm />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/" element={<Navigate to="/book" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
