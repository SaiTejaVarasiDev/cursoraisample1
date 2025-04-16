import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isAuthenticated }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>RPTB Services</h2>
      </div>
      <nav className="sidebar-nav">
        <Link
          to="/book"
          className={`nav-item ${location.pathname === '/book' ? 'active' : ''}`}
        >
          Book Appointment
        </Link>
        <Link
          to="/dashboard"
          className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
        >
          Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar; 