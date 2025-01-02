import React, { useState } from 'react';
import apiClient from '../utils/api';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await apiClient.post('/search', { query }); // Update endpoint and params
            setResults(response.data.results);
        } catch (error) {
            console.error('Error searching PACER:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search query"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
