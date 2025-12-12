import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 4rem;
`;

export const HeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.text1};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    margin: 0;
`;

export const Subtitle = styled.p`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.text3};
    margin: 0;
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 4.5rem;
`;

export const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text.text3};
    transition: color 0.2s ease;
    position: relative;

    &:hover {
        color: ${({ theme }) => theme.colors.text.text1};
    }
`;

export const NotificationBadge = styled.span`
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.error};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.light};
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    padding: 0.6rem 1.5rem 0.6rem 0.6rem;
    background-color: ${({ theme }) => theme.colors.gray.gray1};
    border-radius: 5rem;
`;

export const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserName = styled.span`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.text1};
    margin: 0 3rem 0 1.2rem;
`;
