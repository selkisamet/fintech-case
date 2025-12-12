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
} from './Header.styles';

const Header = ({ title, subtitle }) => {
    const { user } = useAuth();

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

                <UserInfo>
                    <UserAvatar src={userPlaceholder} alt={user?.fullName || 'User'} />
                    <UserName>{user?.fullName || 'User'}</UserName>
                    <IconChevronDown size={16} />
                </UserInfo>
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;
