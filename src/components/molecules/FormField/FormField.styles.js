import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HelperTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

export const HelperText = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.regular};
  line-height: 100%;
  
  color: ${({ theme, $variant }) => {
    if ($variant === 'error') return theme.colors.error;
    if ($variant === 'success') return theme.colors.success;
    if ($variant === 'info') return theme.colors.text.text1;
    return theme.colors.text.text1;
  }};
  
  animation: slideDown 0.2s ease-out;
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;