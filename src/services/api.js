import axios from 'axios';

const BASE_URL = 'https://case.nodelabs.dev/api';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - Add token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');

        console.log('Request:', config.method.toUpperCase(), config.url);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log('Token added to request');
        } else {
            console.log('No token found in localStorage');
        }

        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor - Handle errors
api.interceptors.response.use(
    (response) => {
        console.log('✅ Response:', response.status, response.config.url);
        return response;
    },
    (error) => {
        console.error('Response Error:', error.response?.status, error.config?.url);

        if (error.response?.status === 401) {
            console.log('Unauthorized - Clearing auth data');
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }

        return Promise.reject(error);
    }
);

export default api;