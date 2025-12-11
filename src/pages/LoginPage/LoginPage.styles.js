import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Logo from '../../components/atoms/Logo';
import BackgroundImage from '../../assets/images/BackgroundImage.jpg';

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${theme.colors.gray.gray1};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 42rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const StyledLogo = styled(Logo)`
  margin-bottom: 10rem;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: none;
  }
`;
