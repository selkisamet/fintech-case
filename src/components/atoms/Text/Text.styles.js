import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const variantStyles = {
  heading1: css`
    font-size: 3rem;
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: 100%;
  `,

  heading2: css`
    font-size: 2.4rem;
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: 100%;
  `,

  heading3: css`
    font-size: 2rem;
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: 100%;
  `,

  heading4: css`
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: 100%;
  `,

  body1: css`
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.regular};
    line-height: 100%;
  `,

  body2: css`
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.regular};
    line-height: 100%;
  `,

  caption: css`
    font-size: ${theme.typography.fontSize.xs};
    font-weight: ${theme.typography.fontWeight.regular};
    line-height: 100%;
  `,

  subtitle1: css`
    font-size: 2.4rem;
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: 100%;
  `,
};

const colorStyles = {
  primary: css`
    color: ${theme.colors.text.text1};
  `,

  secondary: css`
    color: ${theme.colors.text.text3};
  `,

  disabled: css`
    color: ${theme.colors.text.text2};
  `,

  error: css`
    color: ${theme.colors.error};
  `,

  success: css`
    color: ${theme.colors.primary};
  `,
};

const alignStyles = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
  justify: css`
    text-align: justify;
  `,
};

const getWeightStyle = (weight, theme) => {
  if (!weight) return '';
  return css`
    font-weight: ${theme.typography.fontWeight[weight]};
  `;
};

export const StyledText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${theme.typography.fontFamily.primary};

  ${({ $variant = 'body1' }) => variantStyles[$variant]}

  ${({ $colorVariant = 'primary' }) => colorStyles[$colorVariant]}
  
  ${({ $align }) => $align && alignStyles[$align]}
  
  ${({ $weight, theme }) => getWeightStyle($weight, theme)}
  
  ${({ $customColor }) => $customColor && css`color: ${$customColor};`}
`;