import React from 'react';
import './Sidebar.css';

function Sidebar({ onViewChange }) {
  const handleBookingClick = () => {
    onViewChange('booking');
  };

  const handleDashboardClick = () => {
    onViewChange('dashboard');
  };

  const handleReportsClick = () => {
    onViewChange('reports');
  };

  return (
    <div className="sidebar">
      <nav>
        <button className="sidebar-button" onClick={handleBookingClick}>Request Booking</button>
        <button className="sidebar-button" onClick={handleDashboardClick}>Dashboard</button>
        <button className="sidebar-button" onClick={handleReportsClick}>Reports</button>
      </nav>
    </div>
  );
}

export default Sidebar; 