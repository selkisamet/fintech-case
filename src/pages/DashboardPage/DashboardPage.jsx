import { useState, useEffect } from 'react';
import { getFinancialSummary } from '../../services/dashboardService';
import DashboardLayout from '../../components/templates/DashboardLayout/DashboardLayout';
import Card from '../../components/molecules/Card/Card';
import IconWallet from '../../components/icons/IconWallet';
import IconPlusWallet from '../../components/icons/IconPlusWallet';
import { StatsGrid } from './DashboardPage.styles';

const DashboardPage = () => {
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

    if (loading) {
        return (
            <DashboardLayout title="Dashboard">
                <div>Loading...</div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout title="Dashboard" >
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
                    icon={<IconPlusWallet />}
                    title="Total Savings"
                    amount={stats?.totalSavings?.amount
                        ? `${stats.totalSavings.currency === 'TRY' ? '₺' : '$'}${stats.totalSavings.amount.toLocaleString()}`
                        : '₺0'
                    }
                    hoverable
                />
            </StatsGrid>
        </DashboardLayout>
    );
};

export default DashboardPage;
