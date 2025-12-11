import { createContext, useContext, useState, useEffect } from 'react';
import * as authService from '../services/authService';

// Create Context
const AuthContext = createContext(undefined);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Derived state: isAuthenticated
    const isAuthenticated = !!user;

    // Check if user is already logged in (on mount)
    useEffect(() => {
        checkAuth();
    }, []);

    // Check authentication status from localStorage
    const checkAuth = () => {
        try {
            const token = localStorage.getItem('authToken');
            const userData = localStorage.getItem('user');

            if (token && userData) {
                setUser(JSON.parse(userData));
            }
        } catch (error) {
            console.error('Failed to check auth:', error);
            // Clear invalid data
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
        } finally {
            setIsLoading(false);
        }
    };

    // Login function
    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const result = await authService.login(email, password);

            if (result.success) {
                setUser(result.data.user);
                return { success: true };
            } else {
                return { success: false, error: result.error };
            }
        } catch (error) {
            return { success: false, error: 'An unexpected error occurred' };
        } finally {
            setIsLoading(false);
        }
    };

    // Register function
    const register = async (name, email, password) => {
        try {
            setIsLoading(true);
            const result = await authService.register(name, email, password);

            if (result.success) {
                setUser(result.data.user);
                return { success: true };
            } else {
                return { success: false, error: result.error };
            }
        } catch (error) {
            return { success: false, error: 'An unexpected error occurred' };
        } finally {
            setIsLoading(false);
        }
    };

    // Logout function
    const logout = async () => {
        try {
            setIsLoading(true);
            await authService.logout();
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
            // Still clear user data even if API call fails
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    // Context value
    const value = {
        user,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
        checkAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use Auth Context
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};