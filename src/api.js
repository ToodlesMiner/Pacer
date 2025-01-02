// src/api.js
import axios from "axios";

// Replace with actual Pacer API endpoint if available
const BASE_URL = "https://pacer-api.example.com"; 

export const searchBankruptcies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { query: query }
    });
    return response.data; // Return the data from the API response
  } catch (error) {
    console.error("Error fetching bankruptcy data:", error);
    throw error;
  }
};
