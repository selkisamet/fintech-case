import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartHeader, ChartTitle, LegendContainer, LegendItem, LegendColor, LegendText, Dropdown, TooltipContainer, TooltipText } from './WorkingCapitalChart.styles';
import { getWorkingCapital } from '../../../services/dashboardService';
import Skeleton from '../../atoms/Skeleton/Skeleton';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <TooltipContainer>
                {payload.map((entry, index) => (
                    <TooltipText key={index} style={{ color: entry.color }}>
                        {`$${entry.value.toLocaleString()}`}
                    </TooltipText>
                ))}
            </TooltipContainer>
        );
    }
    return null;
};

const WorkingCapitalChart = () => {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const result = await getWorkingCapital();
            if (result.success) {
                const mappedData = result.data.data.map(item => ({
                    month: item.month,
                    income: item.income,
                    expenses: item.expense,
                }));
                setChartData(mappedData);
            }
            setLoading(false);
        };
        loadData();
    }, []);

    if (loading) {
        return (
            <ChartContainer>
                <ChartHeader>
                    <Skeleton width="200px" height="24px" />
                    <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto' }}>
                        <Skeleton width="80px" height="20px" />
                        <Skeleton width="80px" height="20px" />
                    </div>
                    <Skeleton width="120px" height="32px" style={{ marginLeft: 'auto' }} />
                </ChartHeader>
                <Skeleton width="100%" height="193px" />
            </ChartContainer>
        );
    }

    return (
        <ChartContainer>
            <ChartHeader>
                <ChartTitle>Working Capital</ChartTitle>
                <LegendContainer>
                    <LegendItem>
                        <LegendColor color="secondary" />
                        <LegendText>Income</LegendText>
                    </LegendItem>
                    <LegendItem>
                        <LegendColor color="primary" />
                        <LegendText>Expenses</LegendText>
                    </LegendItem>
                </LegendContainer>
                <Dropdown>
                    <select>
                        <option>Last 7 days</option>
                    </select>
                </Dropdown>
            </ChartHeader>
            <ResponsiveContainer width="100%" height={193}>
                <LineChart data={chartData} margin={{ left: 40 }}>
                    <CartesianGrid horizontal={false} />
                    <YAxis tickMargin={50} tickLine={false} domain={[0, 'dataMax + 10000']} tickFormatter={(value) => `${value / 1000}K`} axisLine={false} fontSize={12} />
                    <XAxis tickMargin={10} tickLine={false} dataKey="month" axisLine={false} fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="income" stroke="#29A073" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="expenses" stroke="#c8ee44" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
};

export default WorkingCapitalChart;