// src/LoginComponent.js

import React, { useState } from 'react';
import { authenticatePacer, storeAuthToken } from './authenticate'; // Ensure both are imported

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async () => {
    try {
      const token = await authenticatePacer(username, password);
      storeAuthToken(token);  // Save token to localStorage
      setIsAuthenticated(true);  // Update authentication status
    } catch (err) {
      setError('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>Successfully logged in!</div>
      ) : (
        <div>
          <h2>Login to PACER</h2>
          <input
            type="text"
            placeholder="Enter PACER username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter PACER password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <div>{error}</div>}
        </div>
      )}
    </div>
  );
}

export default LoginComponent;
