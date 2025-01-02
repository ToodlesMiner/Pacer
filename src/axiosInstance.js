// src/axiosInstance.js

import axios from 'axios';
import { getAuthToken } from './authenticate';

// Create an Axios instance with the authentication token
const axiosInstance = axios.create({
  baseURL: 'https://api.pacer.gov',  // Set the PACER API base URL here
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${getAuthToken()}`,  // Include the token in the header
  },
});

export default axiosInstance;
