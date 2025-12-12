import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import IconHome from '../../icons/IconHome';
import IconTransactions from '../../icons/IconTransactions';
import IconInvoices from '../../icons/IconInvoices';
import IconMyWallet from '../../icons/IconMyWallet';
import IconSettings from '../../icons/IconSettings';
import IconHelp from '../../icons/IconHelp';
import IconLogout from '../../icons/IconLogout';
import { SidebarContainer, Nav, NavSection, BottomSection, NavItem, LogoContainer } from './Sidebar.styles';
import Logo from '../../atoms/Logo';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: IconHome, path: '/dashboard' },
        { id: 'transactions', label: 'Transactions', icon: IconTransactions, path: '/transactions' },
        { id: 'invoices', label: 'Invoices', icon: IconInvoices, path: '/invoices' },
        { id: 'wallets', label: 'My Wallets', icon: IconMyWallet, path: '/wallets' },
        { id: 'settings', label: 'Settings', icon: IconSettings, path: '/settings' },
    ];

    const bottomItems = [
        { id: 'help', label: 'Help', icon: IconHelp, path: '/help' },
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <SidebarContainer>
            <LogoContainer>
                <Logo size="medium" />
            </LogoContainer>
            <Nav>
                <NavSection>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <NavItem
                                key={item.id}
                                $active={isActive}
                                onClick={() => handleNavigation(item.path)}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </NavItem>
                        );
                    })}
                </NavSection>

                <BottomSection>
                    {bottomItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <NavItem
                                key={item.id}
                                $active={isActive}
                                onClick={() => handleNavigation(item.path)}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </NavItem>
                        );
                    })}
                    <NavItem onClick={handleLogout}>
                        <IconLogout size={20} />
                        <span>Logout</span>
                    </NavItem>
                </BottomSection>
            </Nav>
        </SidebarContainer>
    );
};

export default Sidebar;
