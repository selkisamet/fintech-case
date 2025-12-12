import Sidebar from '../../organisms/Sidebar/Sidebar';
import Header from '../../organisms/Header/Header';
import WalletCard from '../../organisms/WalletCard/WalletCard';
import { LayoutContainer, MainContent, HeaderWrapper, ContentContainer, MainArea, RightSidebar } from './DashboardLayout.styles';

const DashboardLayout = ({ children, title, subtitle, showRightSidebar = true }) => {
    return (
        <LayoutContainer>
            <Sidebar />
            <MainContent>
                <HeaderWrapper>
                    <Header title={title} subtitle={subtitle} />
                </HeaderWrapper>
                <ContentContainer>
                    <MainArea>
                        {children}
                    </MainArea>
                    {showRightSidebar && (
                        <RightSidebar>
                            <WalletCard />
                        </RightSidebar>
                    )}
                </ContentContainer>
            </MainContent>
        </LayoutContainer>
    );
};

export default DashboardLayout;
