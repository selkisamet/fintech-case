import styled from 'styled-components';

export const StatsGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  ${({ theme }) => theme.media.xl} {
    gap: 1rem;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
  }
  ${({ theme }) => theme.media.md} {
    flex-direction: column;
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
