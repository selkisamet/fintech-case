import api from './api';

export const login = async (email, password) => {
    try {
        const response = await api.post('/users/login', {
            email,
            password,
        });

        const { token, user } = response.data.data;

        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));

        return { success: true, data: response.data.data };
    } catch (error) {
        const message = error.response?.data?.message || 'Login failed';
        return { success: false, error: message };
    }
};

export const register = async (name, email, password) => {
    try {
        const response = await api.post('/users/register', {
            name,
            email,
            password,
        });

        const { token, user } = response.data.data;

        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));

        return { success: true, data: response.data.data };
    } catch (error) {
        const message = error.response?.data?.message || 'Registration failed';
        return { success: false, error: message };
    }
};

export const logout = async () => {
    try {
        await api.post('/users/logout');
    } catch (error) {
        console.error('Logout error:', error);
    } finally {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        window.location.href = '/login';
    }
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;

    try {
        return JSON.parse(userStr);
    } catch (error) {
        console.error('Error parsing user:', error);
        return null;
    }
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return !!token;
};