import styled, { css } from "styled-components";
import { theme } from '../../../styles/theme';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.text3};
  background-color: ${theme.colors.light};
  border: 0.1rem solid ${theme.colors.gray.gray5};
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.text2};
  }
  
  &:focus {
    border-color: ${theme.colors.gray.gray6};
    box-shadow: 0 0 0 0.3rem ${theme.colors.gray.gray4};
  }
  
  &:hover:not(:disabled):not(:focus) {
    border-color: ${theme.colors.gray.gray6}
  }
  
  &:disabled {
    background-color: ${theme.colors.gray.gray2};
    color: ${theme.colors.text.text2};
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  ${({ $hasError, theme }) => $hasError && css`
      border-color: ${theme.colors.error};
      
      &:focus {
        border-color: ${theme.colors.error};
        box-shadow: 0 0 0 1px ${theme.colors.error};
      }

      &:hover:not(:disabled):not(:focus) {
        border-color: ${theme.colors.error}
    }
    `}
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.colors.error};
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