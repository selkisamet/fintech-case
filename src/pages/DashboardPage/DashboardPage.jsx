import { useState, useEffect } from 'react';
import { getFinancialSummary } from '../../services/dashboardService';
import DashboardLayout from '../../components/templates/DashboardLayout/DashboardLayout';
import Card from '../../components/molecules/Card/Card';
import IconWallet from '../../components/icons/IconWallet';
import IconPlusWallet from '../../components/icons/IconPlusWallet';
import WorkingCapitalChart from '../../components/molecules/WorkingCapitalChart/WorkingCapitalChart';
import RecentTransaction from '../../components/molecules/RecentTransaction/RecentTransaction';
import { formatCurrency } from '../../utils/formatters';
import Skeleton from '../../components/atoms/Skeleton/Skeleton';
import { StatsGrid, ChartSection, TransactionSection, DashboardContentContainer, MainArea } from './DashboardPage.styles';

import { RightSidebar } from '../../components/templates/DashboardLayout/DashboardLayout.styles';
import WalletCard from '../../components/organisms/WalletCard/WalletCard';

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
                <DashboardContentContainer>
                    <MainArea>
                        <StatsGrid>
                            <Skeleton width="100%" height="120px" borderRadius="0.5rem" />
                            <Skeleton width="100%" height="120px" borderRadius="0.5rem" />
                            <Skeleton width="100%" height="120px" borderRadius="0.5rem" />
                        </StatsGrid>
                        <Skeleton width="100%" height="400px" borderRadius="1rem" />
                        <Skeleton width="100%" height="300px" borderRadius="1rem" />
                    </MainArea>
                </DashboardContentContainer>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout title="Dashboard" >
            <DashboardContentContainer>
                <MainArea>
                    <StatsGrid>
                        <Card
                            icon={<IconWallet />}
                            title="Total Balance"
                            amount={stats?.totalBalance?.amount
                                ? formatCurrency(stats.totalBalance.amount, stats.totalBalance.currency)
                                : '$0.00'
                            }
                            hoverable
                        />
                        <Card
                            icon={<IconWallet />}
                            title="Total Expense"
                            amount={stats?.totalExpense?.amount
                                ? formatCurrency(stats.totalExpense.amount, stats.totalExpense.currency)
                                : '$0.00'
                            }
                            hoverable
                        />
                        <Card
                            icon={<IconPlusWallet />}
                            title="Total Savings"
                            amount={stats?.totalSavings?.amount
                                ? formatCurrency(stats.totalSavings.amount, stats.totalSavings.currency)
                                : '$0.00'
                            }
                            hoverable
                        />
                    </StatsGrid>
                    <ChartSection>
                        <WorkingCapitalChart />
                    </ChartSection>
                    <TransactionSection>
                        <RecentTransaction />
                    </TransactionSection>
                </MainArea>
                <RightSidebar>
                    <WalletCard />
                </RightSidebar>
            </DashboardContentContainer>
        </DashboardLayout>
    );
};

export default DashboardPage;
