import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import IconSearch from '../../icons/IconSearch';
import IconNotification from '../../icons/IconNotification';
import IconChevronDown from '../../icons/IconChevronDown';
import userPlaceholder from '../../../assets/images/user.png';
import {
    HeaderContainer,
    HeaderLeft,
    Title,
    Subtitle,
    HeaderRight,
    IconButton,
    NotificationBadge,
    UserInfo,
    UserAvatar,
    UserName,
    DropdownMenu,
    DropdownItem,
} from './Header.styles';

const Header = ({ title, subtitle }) => {
    const { user, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        logout();
        setIsDropdownOpen(false);
    };

    return (
        <HeaderContainer>
            <HeaderLeft>
                <Title>{title}</Title>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </HeaderLeft>

            <HeaderRight>
                <IconButton>
                    <IconSearch size={20} />
                </IconButton>

                <IconButton>
                    <IconNotification size={20} />
                    <NotificationBadge />
                </IconButton>

                <UserInfo onClick={toggleDropdown}>
                    <UserAvatar src={userPlaceholder} alt={user?.fullName || 'User'} />
                    <UserName>{user?.fullName || 'User'}</UserName>
                    <IconChevronDown size={16} />
                    {isDropdownOpen && (
                        <DropdownMenu>
                            <DropdownItem>Profile</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                        </DropdownMenu>
                    )}
                </UserInfo>
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;
