import { StyledButton } from './Button.styles';

const Button = ({ variant = "primary", fullWidth, icon, children, ...rest }) => {
    return (
        <StyledButton $variant={variant} $fullWidth={fullWidth} {...rest}>
            {icon && <span>{icon}</span>}
            {children}
        </StyledButton>
    );
};

export default Button;