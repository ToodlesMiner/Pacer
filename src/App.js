// src/App.js

import React, { useState } from 'react';
import LoginComponent from './LoginComponent'; // Import LoginComponent

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated from localStorage
  const token = localStorage.getItem('pacerAuthToken');
  if (token) {
    setIsAuthenticated(true); // User is authenticated
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>Welcome! You are logged in.</div> // You can replace this with your main app's content
      ) : (
        <LoginComponent />
      )}
    </div>
  );
}

export default App;
