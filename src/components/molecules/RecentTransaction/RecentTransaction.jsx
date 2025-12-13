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
import { formatDate, formatCurrency } from '../../../utils/formatters';
import Skeleton from '../../atoms/Skeleton/Skeleton';

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



    if (loading) {
        return (
            <TransactionContainer>
                <TransactionHeader>
                    <Skeleton width="180px" height="24px" />
                    <Skeleton width="80px" height="20px" style={{ marginLeft: 'auto' }} />
                </TransactionHeader>
                <div style={{ padding: '1rem' }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <Skeleton width="40px" height="40px" borderRadius="50%" />
                            <div style={{ flex: 1 }}>
                                <Skeleton width="150px" height="16px" style={{ marginBottom: '0.5rem' }} />
                                <Skeleton width="100px" height="14px" />
                            </div>
                            <Skeleton width="80px" height="16px" />
                            <Skeleton width="100px" height="16px" />
                        </div>
                    ))}
                </div>
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
                                                {transaction.image && !transaction.image.includes('ibb.co') ? (
                                                    <img
                                                        src={transaction.image}
                                                        alt={transaction.name}
                                                        onError={(e) => {
                                                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNFNUU3RUIiLz4KPHBhdGggZD0iTTIwIDIwQzIyLjc2MTQgMjAgMjUgMTcuNzYxNCAyNSAxNUMyNSAxMi4yMzg2IDIyLjc2MTQgMTAgMjAgMTBDMTcuMjM4NiAxMCAxNSAxMi4yMzg2IDE1IDE1QzE1IDE3Ljc2MTQgMTcgMjAgMTdaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=';
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
                                            {formatCurrency(transaction.amount, transaction.currency)}
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
