import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 4rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 1440px) {
        padding: 2.5rem 3rem;
    }

    ${({ theme }) => theme.media.xl} {
        padding: 2rem 2rem;
    }

    ${({ theme }) => theme.media.md} {
        padding: 1.5rem 1rem;
        flex-wrap: wrap;
        gap: 1rem;
    }
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    ${({ theme }) => theme.media.md} {
        gap: 1rem;
    }
`;

export const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text.text1};
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    ${({ theme }) => theme.media.lg} {
        display: flex;
    }
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.text1};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    margin: 0;

    ${({ theme }) => theme.media.md} {
        font-size: 2.4rem;
    }

    ${({ theme }) => theme.media.sm} {
        font-size: 2rem;
    }
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

    ${({ theme }) => theme.media.md} {
        gap: 2rem;
    }

    ${({ theme }) => theme.media.sm} {
        gap: 1rem;
    }
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
    position: relative;
    cursor: pointer;
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

    ${({ theme }) => theme.media.md} {
        display: none;
    }
`;

export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 0.5rem 0;
    min-width: 150px;
    z-index: 1000;
    margin-top: 0.5rem;
`;

export const DropdownItem = styled.div`
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.text1};
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray.gray1};
    }

    &:last-child {
        color: ${({ theme }) => theme.colors.error};
    }
`;
