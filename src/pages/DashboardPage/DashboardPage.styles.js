import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray.gray1};
`;

export const Header = styled.header`
  background-color: ${theme.colors.light};
  padding: 2rem 4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.text1};
`;

export const StatsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

export const LogoutButton = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: transparent;
  border: 1px solid ${theme.colors.text.text2};
  border-radius: 0.6rem;
  color: ${theme.colors.text.text2};
  cursor: pointer;
  font-size: ${theme.typography.fontSize.sm};
  
  &:hover {
    background-color: ${theme.colors.gray.gray3};
  }
`;