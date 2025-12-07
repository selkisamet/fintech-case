import { StyledLabel, RequiredIndicator } from './Label.styles';

const Label = ({ children, htmlFor, required = false, disabled = false }, ...rest) => {
    return (
        <StyledLabel htmlFor={htmlFor} $disabled={disabled} {...rest}>
            {children}
            {required && <RequiredIndicator aria-label="required">*</RequiredIndicator>}
        </StyledLabel>
    )
}

export default Label