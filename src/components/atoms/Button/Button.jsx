import Spinner from '../Spinner/Spinner';
import { StyledButton } from './Button.styles';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    loading = false,
    disabled = false,
    type = 'button',
    onClick,
    ...props
}) => {
    return (
        <StyledButton
            $variant={variant}
            $size={size}
            $fullWidth={fullWidth}
            $loading={loading}
            disabled={disabled || loading}
            type={type}
            onClick={onClick}
            {...props}
        >
            {loading && <Spinner size="small" />}
            {children}
        </StyledButton>
    );
};

export default Button;