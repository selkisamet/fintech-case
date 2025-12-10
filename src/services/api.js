import axios from 'axios';

const BASE_URL = 'https://case.nodelabs.dev/api';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        console.log('🚀 Request:', config.method.toUpperCase(), config.url);

        return config;
    },
    (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log('✅ Response:', response.status, response.config.url);
        return response;
    },
    (error) => {
        console.error('❌ Response Error:', error.response?.status, error.config?.url);

        if (error.response?.status === 401) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');

            window.location.href = '/login';
        }

        if (error.response?.status === 403) {
            console.error('Access denied');
        }

        if (error.response?.status === 500) {
            console.error('Server error');
        }

        return Promise.reject(error);
    }
);

export default api;