import styled from 'styled-components';

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ErrorCard = styled.div`
    max-width: 600px;
    width: 100%;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const ErrorTitle = styled.h2`
    color: ${({ theme }) => theme.colors.error};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 24px;
`;

export const ErrorActions = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-bottom: 24px;
`;

export const ErrorButton = styled.button`
    padding: 12px 24px;
    background-color: ${({ variant, theme }) =>
        variant === 'secondary' ? 'transparent' : theme.colors.primary};
    color: ${({ variant, theme }) =>
        variant === 'secondary' ? theme.colors.primary : '#fff'};
    border: ${({ variant, theme }) =>
        variant === 'secondary' ? `1px solid ${theme.colors.primary}` : 'none'};
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const ErrorDetails = styled.details`
    margin-top: 24px;
    text-align: left;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};

    summary {
        cursor: pointer;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 12px;
        user-select: none;

        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const ErrorStack = styled.pre`
    font-size: 12px;
    font-family: 'Courier New', Courier, monospace;
    overflow: auto;
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.4;
    max-height: 300px;
`;
