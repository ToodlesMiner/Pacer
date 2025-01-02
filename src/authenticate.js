// src/authenticate.js

export const authenticatePacer = async (username, password) => {
    const API_URL = "https://pacer.uscourts.gov"; // Change to your correct URL if needed
  
    const requestBody = {
      username,
      password,
    };
  
    const response = await fetch(`${API_URL}/services/cso-auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    });
  
    const data = await response.json();
    if (data.loginResult !== "success") {
      throw new Error("Authentication failed");
    }
  
    return data.nextGenCSO; // Assuming this is the authentication token
  };
  
  export const storeAuthToken = (token) => {
    localStorage.setItem("pacerAuthToken", token);
  };
  