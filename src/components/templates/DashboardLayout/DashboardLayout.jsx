import { useState } from 'react';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import Header from '../../organisms/Header/Header';
import { LayoutContainer, MainContent, HeaderWrapper, ContentContainer, MainArea } from './DashboardLayout.styles';

const DashboardLayout = ({ children, title, subtitle }) => {
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
                </ContentContainer>
            </MainContent>
        </LayoutContainer>
    );
};

export default DashboardLayout;
