import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import BookingForm from './components/BookingForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'booking':
        return <BookingForm />;
      default:
        return (
          <header className="App-header">
            <h1>Welcome to the RPTB Services</h1>
          </header>
        );
    }
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="home-container">
          <Sidebar onViewChange={setCurrentView} />
          <main className="main-content">
            {renderContent()}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
