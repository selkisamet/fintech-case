import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.light};
`;

export const MainContent = styled.main`
    flex: 1;
    margin-left: 250px;
    display: flex;
    flex-direction: column;
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.light};
`;

export const ContentContainer = styled.div`
    display: flex;
    gap: 4rem;
    padding: 0 4rem;
    flex: 1;
`;

export const MainArea = styled.div`
    flex: 1;
    min-width: 0;
`;

export const RightSidebar = styled.aside`
    width: 35.04rem;
    flex-shrink: 0;
`;
