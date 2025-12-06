import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ variant = "primary", fullWidth, icon, children }) => {
    return (
        <StyledButton $variant={variant} $fullWidth={fullWidth}>
            {icon && <span>{icon}</span>}
            {children}
        </StyledButton>
    );
};

export default Button;