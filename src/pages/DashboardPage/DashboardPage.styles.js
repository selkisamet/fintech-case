import styled from 'styled-components';

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  ${({ theme }) => theme.media.xl} {
    gap: 1rem;
  }
`;

export const ChartSection = styled.div`
  margin-bottom: 3rem;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 1.5rem;
  }
`;

export const TransactionSection = styled.div`
  margin-bottom: 2rem;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 1.5rem;
  }
`;
