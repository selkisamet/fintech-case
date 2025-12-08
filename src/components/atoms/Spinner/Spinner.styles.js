import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const sizeStyles = {
    small: css`
    width: 1.6rem;
    height: 1.6rem;
  `,
    medium: css`
    width: 2.4rem;
    height: 2.4rem;
  `,
    large: css`
    width: 4rem;
    height: 4rem;
  `,
};

const getColorStyle = (color, theme) => {
    const colorMap = {
        primary: theme.colors.primary,
        secondary: theme.colors.gray.gray3,
        white: theme.colors.light,

        success: theme.colors.success,
        error: theme.colors.error,
    };

    return colorMap[color] || color;
};

const speedStyles = {
    fast: '0.6s',
    normal: '0.8s',
    slow: '1.2s',
};

export const SpinnerContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  ${({ $size = 'medium' }) =>
        typeof $size === 'number' ? css`
          width: ${$size}px;
          height: ${$size}px;
        `
            : sizeStyles[$size]}
`;

export const SpinnerSVG = styled.svg`
  width: 100%;
  height: 100%;
  
  animation: ${spin} 
    ${({ $speed = 'normal' }) => speedStyles[$speed]} 
    linear 
    infinite;
  
  circle {
    fill: none;
    stroke: ${({ $color, theme }) => getColorStyle($color || 'primary', theme)};
    stroke-width: ${({ $thickness = 4 }) => $thickness};
    stroke-linecap: round;
    
    stroke-dasharray: 80;
    stroke-dashoffset: 60;
  }
`;