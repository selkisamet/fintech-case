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

export const DashboardContentContainer = styled.div`
  display: flex;
  gap: 4rem;
  flex: 1;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 1440px) {
    gap: 3rem;
  }

  ${({ theme }) => theme.media.xl} {
    gap: 2rem;
  }

  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
    gap: 2rem;
  }

  ${({ theme }) => theme.media.md} {
    gap: 1.5rem;
  }

  ${({ theme }) => theme.media.sm} {
    gap: 1rem;
  }
`;

export const MainArea = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;
