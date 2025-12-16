import mockData from '../data/mockData.json';

// Mock API - Simulates API calls with local JSON data
const api = {
    get: async (endpoint) => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));

        try {
            const path = endpoint.split('/').filter(Boolean);
            let data = mockData;

            // Navigate through the JSON structure based on endpoint
            for (const segment of path) {
                if (data[segment] !== undefined) {
                    data = data[segment];
                } else {
                    throw new Error(`Endpoint not found: ${endpoint}`);
                }
            }

            return {
                data: {
                    data: data,
                    success: true
                }
            };
        } catch (error) {
            return Promise.reject({
                response: {
                    status: 404,
                    data: {
                        message: error.message || 'Data not found'
                    }
                }
            });
        }
    },

    post: async (endpoint, body) => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        try {
            // Handle login
            if (endpoint === '/users/login') {
                const { email, password } = body;

                // Check if user exists in mockData
                const validUser = mockData.users.user1;

                if (!email || !password) {
                    throw new Error('Email and password are required');
                }

                // Validate email and password against mockData
                if (email !== validUser.email) {
                    throw new Error('Invalid email or password');
                }

                // In real scenario, you'd hash and compare password
                // For mock, we'll accept any password for the valid email
                // But you can add specific password check if needed
                if (password.length < 6) {
                    throw new Error('Invalid email or password');
                }

                return {
                    data: {
                        data: mockData.auth.login,
                        success: true
                    }
                };
            }

            // Handle register
            if (endpoint === '/users/register') {
                const { fullName, email, password } = body;

                if (!fullName || !email || !password) {
                    throw new Error('All fields are required');
                }

                if (password.length < 6) {
                    throw new Error('Password must be at least 6 characters');
                }

                // Check if user already exists
                if (email === mockData.users.user1.email) {
                    throw new Error('User with this email already exists');
                }

                return {
                    data: {
                        data: mockData.auth.register,
                        success: true
                    }
                };
            }

            // Handle logout
            if (endpoint === '/users/logout') {
                return {
                    data: {
                        success: true
                    }
                };
            }

            throw new Error(`Endpoint not found: ${endpoint}`);
        } catch (error) {
            return Promise.reject({
                response: {
                    status: 400,
                    data: {
                        message: error.message || 'Request failed'
                    }
                }
            });
        }
    }
};

export default api;