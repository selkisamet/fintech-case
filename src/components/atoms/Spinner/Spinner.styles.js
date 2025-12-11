import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const sizeMap = {
  small: "1.6rem",
  medium: "2.4rem",
  large: "4rem",
};

const speedMap = {
  fast: "0.6s",
  normal: "0.8s",
  slow: "1.2s",
};

export const SpinnerContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${({ $size }) =>
    typeof $size === "number" ? `${$size}px` : sizeMap[$size || "medium"]};
  height: ${({ $size }) =>
    typeof $size === "number" ? `${$size}px` : sizeMap[$size || "medium"]};
`;

export const SpinnerSVG = styled.svg`
  width: 100%;
  height: 100%;

  animation: ${spin}
    ${({ $speed }) => speedMap[$speed || "normal"]} linear infinite;

  circle {
    fill: none;
    stroke: ${({ $color = "primary", theme }) =>
    theme.colors[$color] || $color};
    stroke-width: ${({ $thickness = 4 }) => $thickness};
    stroke-linecap: round;
    stroke-dasharray: 80;
    stroke-dashoffset: 60;
  }
`;
