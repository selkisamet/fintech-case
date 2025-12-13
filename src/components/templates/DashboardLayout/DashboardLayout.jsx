import { useState } from 'react';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import Header from '../../organisms/Header/Header';
import WalletCard from '../../organisms/WalletCard/WalletCard';
import { LayoutContainer, MainContent, HeaderWrapper, ContentContainer, MainArea, RightSidebar } from './DashboardLayout.styles';

const DashboardLayout = ({ children, title, subtitle, showRightSidebar = true }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <LayoutContainer>
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <MainContent>
                <HeaderWrapper>
                    <Header title={title} subtitle={subtitle} onMenuClick={toggleSidebar} />
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
