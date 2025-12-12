import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getFinancialSummary } from '../../services/dashboardService';
import Card from '../../components/molecules/Card/Card';
import Button from '../../components/atoms/Button/Button';
import IconWallet from '../../components/icons/IconWallet';
import {
    PageContainer,
    Header,
    HeaderContent,
    Title,
    StatsGrid,
    LogoutButton,
} from './DashboardPage.styles';

const DashboardPage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const result = await getFinancialSummary();
        if (result.success) {
            setStats(result.data);
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    if (loading) {
        return <PageContainer>Loading...</PageContainer>;
    }

    return (
        <PageContainer>
            <Header>
                <HeaderContent>
                    <Title>Dashboard</Title>
                    <div>
                        <span style={{ marginRight: '2rem', color: '#78778b' }}>
                            Welcome, {user?.fullName || 'User'}
                        </span>
                        <Button variant="outline" size="small" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </HeaderContent>
            </Header>

            <StatsGrid>
                <Card
                    icon={<IconWallet />}
                    title="Total Balance"
                    amount={stats?.totalBalance?.amount
                        ? `${stats.totalBalance.currency === 'TRY' ? '₺' : '$'}${stats.totalBalance.amount.toLocaleString()}`
                        : '₺0'
                    }
                    hoverable
                />
                <Card
                    icon={<IconWallet />}
                    title="Total Expense"
                    amount={stats?.totalExpense?.amount
                        ? `${stats.totalExpense.currency === 'TRY' ? '₺' : '$'}${stats.totalExpense.amount.toLocaleString()}`
                        : '₺0'
                    }
                    hoverable
                />
                <Card
                    icon={<IconWallet />}
                    title="Total Savings"
                    amount={stats?.totalSavings?.amount
                        ? `${stats.totalSavings.currency === 'TRY' ? '₺' : '$'}${stats.totalSavings.amount.toLocaleString()}`
                        : '₺0'
                    }
                    hoverable
                />
            </StatsGrid>
        </PageContainer>
    );
};

export default DashboardPage;