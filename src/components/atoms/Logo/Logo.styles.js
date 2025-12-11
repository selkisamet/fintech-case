import styled from 'styled-components';

const sizeMap = {
    small: {
        width: '81px',
        height: '22.5px',
    },
    medium: {
        width: '108px',
        height: '30px',
    },
    large: {
        width: '162px',
        height: '45px',
    },
    xlarge: {
        width: '216px',
        height: '60px',
    },
};

export const StyledLogo = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    img {
        width: ${({ $size }) => sizeMap[$size]?.width || sizeMap.medium.width};
        height: ${({ $size }) => sizeMap[$size]?.height || sizeMap.medium.height};
        object-fit: contain;
        display: block;
    }
`;
