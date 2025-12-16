import { format } from 'date-fns';

export const formatDate = (dateString) => {
    return format(new Date(dateString), 'dd.MM.yyyy HH:mm');
};

export const formatCurrency = (amount, currency = 'USD') => {
    const number = Math.abs(amount);
    const formatted = number.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return `$${formatted}`;
};