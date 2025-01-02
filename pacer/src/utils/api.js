import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.pacer.gov', // Replace with actual PACER API endpoint
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
