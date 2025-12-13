import styled from 'styled-components';

export const ChartContainer = styled.div`
    background: ${({ theme }) => theme.colors.light};
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    border: solid 0.1rem ${({ theme }) => theme.colors.gray.gray2};
`;

export const ChartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const ChartTitle = styled.h3`
    color: ${({ theme }) => theme.colors.text.text1};
    margin: 0;
    font-size: clamp(1.6rem, 1.8vw, 1.8rem);
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const LegendContainer = styled.div`
    display: flex;
    gap: 1rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        flex-direction: column;
    }
`;

export const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const LegendColor = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ theme, color }) => theme.colors[color]};
`;

export const LegendText = styled.span`
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    color: ${({ theme }) => theme.colors.text.text1};
`;

export const Dropdown = styled.div`
    select {
        padding: 0.75rem 1rem;
        border: none;
        background: ${({ theme }) => theme.colors.gray.gray2};
        color: ${({ theme }) => theme.colors.text.text1};
        font-size: 1.2rem;
        border-radius: 0.5rem;
    }
`;

export const TooltipContainer = styled.div`
    background-color: #F3F6F8;
    border-radius: 4px;
    padding: 10px;
`;

export const TooltipText = styled.p`
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.text.text1};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;