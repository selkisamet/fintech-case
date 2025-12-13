import axios from 'axios';
import toast from 'react-hot-toast';

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

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - Handle errors
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;

        // Network error (no response from server)
        if (!response) {
            console.error('Network error:', error.message);
            toast.error('Network error. Please check your connection.');
            return Promise.reject(error);
        }

        // 401 Unauthorized - Auto logout
        if (response.status === 401) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            window.location.href = '/login';
            return Promise.reject(error);
        }

        // 500+ Server errors
        if (response.status >= 500) {
            console.error('Server error:', response.data);
            toast.error('A server error occurred. Please try again later.');
        }
        // 400-499 Client errors
        else if (response.status >= 400) {
            console.error('Client error:', response.data);
            const message = response.data?.message || 'An error occurred. Please check your input.';
            toast.error(message);
        }

        return Promise.reject(error);
    }
);

export default api;