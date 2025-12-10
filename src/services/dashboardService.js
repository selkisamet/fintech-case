import api from './api';

export const getFinancialSummary = async () => {
    try {
        const response = await api.get('/financial/summary');
        return { success: true, data: response.data.data };
    } catch (error) {
        const message = error.response?.data?.message || 'Failed to fetch summary';
        return { success: false, error: message };
    }
};

export const getWorkingCapital = async () => {
    try {
        const response = await api.get('/financial/working-capital');
        return { success: true, data: response.data.data };
    } catch (error) {
        const message = error.response?.data?.message || 'Failed to fetch working capital';
        return { success: false, error: message };
    }
};

export const getWallet = async () => {
    try {
        const response = await api.get('/financial/wallet');
        return { success: true, data: response.data.data };
    } catch (error) {
        const message = error.response?.data?.message || 'Failed to fetch wallet';
        return { success: false, error: message };
    }
};

export const getRecentTransactions = async () => {
    try {
        const response = await api.get('/financial/transactions/recent');
        return { success: true, data: response.data.data };
    } catch (error) {
        const message = error.response?.data?.message || 'Failed to fetch transactions';
        return { success: false, error: message };
    }
};

export const getScheduledTransfers = async () => {
    try {
        const response = await api.get('/financial/transfers/scheduled');
        return { success: true, data: response.data.data };
    } catch (error) {
        const message = error.response?.data?.message || 'Failed to fetch transfers';
        return { success: false, error: message };
    }
};

export const getDashboardData = async () => {
    try {
        const [summary, workingCapital, wallet, transactions, transfers] = await Promise.all([
            getFinancialSummary(),
            getWorkingCapital(),
            getWallet(),
            getRecentTransactions(),
            getScheduledTransfers(),
        ]);

        return {
            success: true,
            data: {
                summary: summary.data,
                workingCapital: workingCapital.data,
                wallet: wallet.data,
                transactions: transactions.data,
                transfers: transfers.data,
            },
        };
    } catch (error) {
        return { success: false, error: 'Failed to fetch dashboard data' };
    }
};