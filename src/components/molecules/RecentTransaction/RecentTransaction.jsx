import { useState, useEffect } from 'react';
import {
    TransactionContainer,
    TransactionHeader,
    TransactionTitle,
    ViewAllLink,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TransactionInfo,
    TransactionIcon,
    TransactionDetails,
    TransactionName,
    TransactionBusiness,
    TransactionType,
    TransactionAmount,
    TransactionDate,
} from './RecentTransaction.styles';
import { getRecentTransactions } from '../../../services/dashboardService';

const RecentTransaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await getRecentTransactions();
                if (response.success && response.data?.transactions) {
                    setTransactions(response.data.transactions);
                }
            } catch (error) {
                console.error('Error fetching recent transactions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    const formatAmount = (amount, currency) => {
        const formattedAmount = Math.abs(amount).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return `${currency || '$'}${formattedAmount}`;
    };

    if (loading) {
        return (
            <TransactionContainer>
                <TransactionHeader>
                    <TransactionTitle>Recent Transaction</TransactionTitle>
                </TransactionHeader>
                <div>Loading...</div>
            </TransactionContainer>
        );
    }

    return (
        <TransactionContainer>
            <TransactionHeader>
                <TransactionTitle>Recent Transaction</TransactionTitle>
                <ViewAllLink href="#">
                    View All →
                </ViewAllLink>
            </TransactionHeader>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Name/Business</TableHeader>
                            <TableHeader>Type</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Date</TableHeader>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.slice(0, 5).map((transaction) => (
                                <TableRow key={transaction.id}>
                                    <TableCell>
                                        <TransactionInfo>
                                            <TransactionIcon>
                                                {transaction.image ? (
                                                    <img
                                                        src={transaction.image}
                                                        alt={transaction.name}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.parentElement.textContent = transaction.name?.charAt(0) || '?';
                                                        }}
                                                    />
                                                ) : (
                                                    transaction.name?.charAt(0) || '?'
                                                )}
                                            </TransactionIcon>
                                            <TransactionDetails>
                                                <TransactionName>{transaction.name}</TransactionName>
                                                <TransactionBusiness>{transaction.business}</TransactionBusiness>
                                            </TransactionDetails>
                                        </TransactionInfo>
                                    </TableCell>
                                    <TableCell>
                                        <TransactionType>{transaction.type}</TransactionType>
                                    </TableCell>
                                    <TableCell>
                                        <TransactionAmount>
                                            {formatAmount(transaction.amount, transaction.currency)}
                                        </TransactionAmount>
                                    </TableCell>
                                    <TableCell>
                                        <TransactionDate>{formatDate(transaction.date)}</TransactionDate>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} style={{ textAlign: 'center', padding: '2rem' }}>
                                    No recent transactions
                                </TableCell>
                            </TableRow>
                        )}
                    </tbody>
                </Table>
            </TableContainer>
        </TransactionContainer>
    );
};

export default RecentTransaction;
