import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, accept any non-empty username and password
    if (username && password) {
      onLogin(true);
    }
  };

  //create a forgot password link in frontend
  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Forgot Password clicked');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to RPTB Services</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="forgot-password">
            <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login; 