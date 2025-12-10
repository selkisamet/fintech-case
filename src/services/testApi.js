import { login } from './authService';
import { getFinancialSummary } from './dashboardService';

export const testApiServices = async () => {
    console.log('Testing API Services...');

    console.log('\n Test 1: Login');
    const loginResult = await login('admin@samet.com', 'password');
    console.log('Login result:', loginResult);

    if (loginResult.success) {
        console.log('Login successful!');

        console.log('\n Test 2: Financial Summary');
        const summaryResult = await getFinancialSummary();
        console.log('Summary result:', summaryResult);

        if (summaryResult.success) {
            console.log('API Services are working correctly!');
            console.log('Financial Data:', summaryResult.data);
        } else {
            console.log('Financial Summary failed:', summaryResult.error);
        }
    } else {
        console.log('Login failed:', loginResult.error);
    }
};

if (typeof window !== 'undefined') {
    window.testApiServices = testApiServices;
}