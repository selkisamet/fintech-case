import styled from 'styled-components';

export const TransactionContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 1.2rem;
    padding: 2rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    ${({ theme }) => theme.media.md} {
        padding: 1.5rem;
    }
`;

export const TransactionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => theme.media.sm} {
        margin-bottom: 1.5rem;
    }
`;

export const TransactionTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.text1};

    ${({ theme }) => theme.media.md} {
        font-size: 1.6rem;
    }
`;

export const ViewAllLink = styled.a`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    ${({ theme }) => theme.media.sm} {
        font-size: 1.2rem;
    }
`;

export const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
        height: 6px;
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.gray.gray2};
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.text.text3};
        border-radius: 3px;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    ${({ theme }) => theme.media.md} {
        min-width: 500px;
    }
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray2};
    
    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray.gray1};
    }
`;

export const TableHeader = styled.th`
    text-align: left;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.text2};
    text-transform: uppercase;
    padding: 2rem 0;

    ${({ theme }) => theme.media.sm} {
        padding: 1rem 0.5rem;
        font-size: 1.1rem;
    }
`;

export const TableCell = styled.td`
    padding: 1.5rem 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text.text1};

    ${({ theme }) => theme.media.sm} {
        padding: 1.2rem 0.5rem;
        font-size: 1.3rem;
    }
`;

export const TransactionInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    ${({ theme }) => theme.media.sm} {
        gap: 0.8rem;
    }
`;

export const TransactionIcon = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.gray.gray2};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${({ theme }) => theme.media.sm} {
        width: 4rem;
        height: 4rem;
    }
`;

export const TransactionDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-width: 0;
`;

export const TransactionName = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text.text1};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${({ theme }) => theme.media.sm} {
        font-size: 1.3rem;
    }
`;

export const TransactionBusiness = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text.text2};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${({ theme }) => theme.media.sm} {
        font-size: 1.1rem;
    }
`;

export const TransactionType = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text.text2};

    ${({ theme }) => theme.media.sm} {
        font-size: 1.3rem;
    }
`;

export const TransactionAmount = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.text1};

    ${({ theme }) => theme.media.sm} {
        font-size: 1.3rem;
    }
`;

export const TransactionDate = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text.text2};

    ${({ theme }) => theme.media.sm} {
        font-size: 1.3rem;
    }
`;
