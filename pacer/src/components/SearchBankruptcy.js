// src/components/SearchBankruptcy.js
import React, { useState } from "react";
import { searchBankruptcies } from "../api";

const SearchBankruptcy = () => {
  const [query, setQuery] = useState("");   // Input query state
  const [results, setResults] = useState([]); // Results state
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null); // Error state

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchBankruptcies(query);
      setResults(data);  // Set results when data is fetched
    } catch (err) {
      setError("Failed to fetch bankruptcy cases.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Search for Chapter 7 Bankruptcies with Surrendered Property</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search criteria"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Loading..." : "Search"}
      </button>

      {error && <p>{error}</p>}

      <div>
        <h3>Results:</h3>
        {results.length === 0 ? (
          <p>No results found</p>
        ) : (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.name} - {result.caseNumber}</li> // Adjust based on API response structure
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBankruptcy;
