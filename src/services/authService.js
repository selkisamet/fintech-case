import api from './api';

export const login = async (email, password) => {
    try {
        const response = await api.post('/users/login', { email, password });
        const { accessToken, user } = response.data.data;

        localStorage.setItem('authToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));

        return { success: true, data: { token: accessToken, user } };
    } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || 'Login failed'
        };
    }
};

export const register = async (name, email, password) => {
    try {
        const response = await api.post('/users/register', {
            fullName: name,
            email,
            password
        });
        const { accessToken, user } = response.data.data;

        localStorage.setItem('authToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));

        return { success: true, data: { token: accessToken, user } };
    } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || 'Registration failed'
        };
    }
};

export const logout = async () => {
    try {
        await api.post('/users/logout');
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        return { success: true };
    } catch (error) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        return { success: false, error: error.response?.data?.message };
    }
};