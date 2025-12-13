import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartHeader, ChartTitle, LegendContainer, LegendItem, LegendColor, LegendText, Dropdown, TooltipContainer, TooltipText } from './WorkingCapitalChart.styles';

const data = [
    { date: 'Apr 14', income: 3000, expenses: 1500 },
    { date: 'Apr 15', income: 4000, expenses: 2200 },
    { date: 'Apr 16', income: 3500, expenses: 2800 },
    { date: 'Apr 17', income: 5000, expenses: 7500 },
    { date: 'Apr 18', income: 4500, expenses: 3800 },
    { date: 'Apr 19', income: 6000, expenses: 10000 },
    { date: 'Apr 20', income: 5500, expenses: 4800 },
];

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
                <LineChart data={data}>
                    <CartesianGrid horizontal={false} stroke='#FFF4FE' />
                    <YAxis tickMargin={43} tickLine={false} domain={[0, 10000]} ticks={[10000, 7000, 5000, 3000, 0]} tickFormatter={(value) => `${value / 1000}K`} axisLine={false} fontSize={12} />
                    <XAxis tickMargin={15} tickLine={false} dataKey="date" axisLine={false} fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="income" stroke="#29A073" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="expenses" stroke="#c8ee44" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
};

export default WorkingCapitalChart;