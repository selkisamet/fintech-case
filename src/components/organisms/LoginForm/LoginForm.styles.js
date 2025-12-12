import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const FormContainer = styled.form`
  width: 100%;
  border-radius: 1rem;
`;

export const FormTitle = styled.h2`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.text1};
  margin-bottom: 0.8rem;
`;

export const FormSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.text.text2};
  margin-bottom: 3.2rem;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 2.4rem;
`;

export const FormActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ErrorMessage = styled.div`
  padding: 1.2rem;
  background-color: ${theme.colors.error}15;
  border: 1px solid ${theme.colors.error};
  border-radius: 1rem;
  color: ${theme.colors.error};
  font-size: ${theme.typography.fontSize.sm};
  text-align: center;
  margin-bottom: 1.6rem;
`;

export const FormFooter = styled.div`
  margin-top: 2.5rem;
  text-align: center;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.text2};
  display: flex;
  justify-content: center;
  gap: 0.6rem;

  a {
    color: ${theme.colors.darkish};
    text-decoration: none;
    font-weight: ${theme.typography.fontWeight.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;

    &:hover {
      text-decoration: underline;
    }

    svg {
      width: 45px;
      height: 8px;
      fill: none;
      stroke-width: 3rem;

      path{
        stroke: ${theme.colors.primary};
        stroke-width: 0.3rem;
      }
    }
  }
`;
