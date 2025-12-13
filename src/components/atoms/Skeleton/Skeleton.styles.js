import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
`;

export const SkeletonContainer = styled.div`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '20px'};
    border-radius: ${({ $borderRadius }) => $borderRadius};
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200px 100%;
    animation: ${shimmer} 1.5s infinite;
    position: relative;
    overflow: hidden;
`;

export const Shimmer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
    );
    animation: ${shimmer} 1.5s infinite;
`;