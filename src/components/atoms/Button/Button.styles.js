import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

export const StyledButton = styled.button`
  padding: 1.4rem 2rem;
  border-radius: 1rem;
  font-size: ${theme.typography.fontSize.base};
  height: 4.8rem;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  cursor: pointer;
  border: none;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all 0.3s ease;

  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.text.text1};

      &:hover {
        color: ${theme.colors.primary};
        background: ${theme.colors.darkish};
      }
    `}

  ${({ $variant }) =>
    $variant === "social" &&
    css`
      background-color: ${theme.colors.light};
      color: ${theme.colors.text.text3};
      border: 0.1rem solid ${theme.colors.gray.gray3};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      &:hover {
        background: ${theme.colors.gray.gray3};
      }

      img{
        height: 2.4rem;
        width: 2.4rem;
      }
    `}
`;