import styled from 'styled-components';

export const TransfersSection = styled.div`
    margin-top: 3rem;
    
    ${({ theme }) => theme.media.lg} {
        padding: 1.2rem;
        border-radius: 1.2rem;
        border: solid 0.1rem ${({ theme }) => theme.colors.gray.gray2};
    }
`;

export const TransfersHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TransfersTitle = styled.h4`
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.text1};
    margin: 0;

    ${({ theme }) => theme.media.md} {
        font-size: 1.6rem;
    }

    ${({ theme }) => theme.media.sm} {
        font-size: 1.4rem;
    }
`;

export const ViewAllButton = styled.button`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    cursor: pointer;
    transition: color 0.3s ease;

     &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const TransfersList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
`;

export const TransferItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray2};

    ${({ theme }) => theme.media.sm} {
        gap: 1rem;
        padding: 1rem 0;
    }

    &:last-child {
        border-bottom: none;
    }

     &:hover {
        background-color: ${({ theme }) => theme.colors.gray.gray1};
    }
`;

export const TransferAvatar = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray.gray2};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    flex-shrink: 0;

    ${({ theme }) => theme.media.sm} {
        width: 3.5rem;
        height: 3.5rem;
        font-size: 1.6rem;
    }
`;

export const TransferInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const TransferName = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.text1};
`;

export const TransferDate = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text.text2};
`;

export const TransferAmount = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.black};
    white-space: nowrap;
`;
