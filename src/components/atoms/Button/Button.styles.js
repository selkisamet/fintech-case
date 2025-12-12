import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

export const StyledButton = styled.button`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.4rem 2rem !important;
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.bold};
  font-family: ${theme.typography.fontFamily};
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Loading state - $loading yerine disabled kullanıyoruz */
  ${({ $loading }) =>
    $loading &&
    css`
      cursor: not-allowed;
      opacity: 0.8;
    `}

  /* Full width */
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  /* Variants */
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.text1};

          &:hover{
            color: ${theme.colors.primary};
            background-color: ${theme.colors.darkish};
          }

          &:active:not(:disabled) {
            transform: scale(0.98);
          }
        `;

      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
           color: ${theme.colors.text.text1};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.secondaryDark};
          }

          &:active:not(:disabled) {
            transform: scale(0.98);
          }
        `;

      case 'outline':
        return css`
          background-color: transparent;
          color: ${theme.colors.text.text3};
          border: 0.1rem solid ${theme.colors.gray.gray3};

          &:hover {
            background: ${theme.colors.gray.gray3};
            color: ${theme.colors.text.text1};
          }
        `;

      case 'text':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          padding: 0.8rem 1.6rem;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary}10;
          }
        `;

      case 'danger':
        return css`
          background-color: ${theme.colors.error};
          color: ${theme.colors.light};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.errorDark};
          }
        `;

      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.light};
        `;
    }
  }}

  /* Sizes */
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: 0.8rem 1.6rem;
          font-size: ${theme.typography.fontSize.sm};
        `;

      case 'large':
        return css`
          padding: 1.6rem 3.2rem;
          font-size: ${theme.typography.fontSize.lg};
        `;

      default:
        return css`
          padding: 1.4rem 2.4rem;
        `;
    }
  }}
`;