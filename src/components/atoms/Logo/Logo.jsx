import { StyledLogo } from './Logo.styles';
import LogoSvg from '../../../assets/images/Logo.svg';

const Logo = ({ size = 'medium', className, ...props }) => {
    return (
        <StyledLogo $size={size} className={className} {...props}>
            <img src={LogoSvg} alt="Fintech Logo" />
        </StyledLogo>
    );
};

export default Logo;