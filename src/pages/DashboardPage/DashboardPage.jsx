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
                            Welcome, {user?.name || 'User'}
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
                    amount={stats?.totalBalance ? `$${stats.totalBalance}` : '$0'}
                    hoverable
                />
                <Card
                    icon={<IconWallet />}
                    title="Total Spending"
                    amount={stats?.totalSpending ? `$${stats.totalSpending}` : '$0'}
                    hoverable
                />
                <Card
                    icon={<IconWallet />}
                    title="Total Saved"
                    amount={stats?.totalSaved ? `$${stats.totalSaved}` : '$0'}
                    hoverable
                />
            </StatsGrid>
        </PageContainer>
    );
};

export default DashboardPage;