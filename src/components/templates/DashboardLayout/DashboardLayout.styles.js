import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.light};
    overflow-x: hidden;
    max-width: 100vw;
    width: 100%;
`;

export const MainContent = styled.main`
    flex: 1;
    margin-left: 250px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 250px);
    max-width: calc(100vw - 250px);
    overflow-x: hidden;

    ${({ theme }) => theme.media.lg} {
        margin-left: 0;
        width: 100%;
        max-width: 100vw;
    }
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
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;

    @media (max-width: 1440px) {
        gap: 3rem;
        padding: 0 3rem;
    }

    ${({ theme }) => theme.media.xl} {
        gap: 2rem;
        padding: 0 2rem;
    }

    ${({ theme }) => theme.media.lg} {
        flex-direction: column;
        gap: 2rem;
        padding: 0 2rem;
    }

    ${({ theme }) => theme.media.md} {
        padding: 0 1rem;
        gap: 1.5rem;
    }

    ${({ theme }) => theme.media.sm} {
        padding: 0 0.5rem;
        gap: 1rem;
    }
`;

export const MainArea = styled.div`
    flex: 1;
    min-width: 0;
    overflow: hidden;
`;

export const RightSidebar = styled.aside`
    width: 35.04rem;
    max-width: 100%;
    flex-shrink: 1;
    min-width: 280px;

    @media (max-width: 1440px) {
        width: 32rem;
    }

    ${({ theme }) => theme.media.xl} {
        width: 28rem;
    }

    ${({ theme }) => theme.media.lg} {
        width: 100%;
        max-width: none;
        min-width: auto;
    }
`;
