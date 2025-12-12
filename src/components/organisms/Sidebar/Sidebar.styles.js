import styled from 'styled-components';

export const SidebarContainer = styled.aside`
    width: 250px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.gray.gray1};
    border-right: 1px solid ${({ theme }) => theme.colors.gray.gray3};
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start ;
    padding: 3rem 0 3rem 2.5rem;
`;

export const Logo = styled.div`
    padding: 2.5rem 2rem;
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    color: ${({ theme }) => theme.colors.text.text1};
`;

export const Nav = styled.nav`
    flex: 1;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
`;

export const NavSection = styled.div`
    flex: 1;
`;

export const BottomSection = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.gray.gray3};
    padding-top: 1rem;
`;

export const NavItem = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.4rem;
    border: none;
    background-color: ${({ $active, theme }) => $active ? theme.colors.primary : 'transparent'};
    color: ${({ $active, theme }) => $active ? theme.colors.text.text1 : theme.colors.text.text2};
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ $active, theme }) => $active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 0.25rem;

    &:hover {
        background-color: ${({ $active, theme }) =>
        $active ? theme.colors.primary : theme.colors.gray.gray3};
    }

    svg {
        flex-shrink: 0;
    }
`;
