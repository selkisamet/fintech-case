import React from 'react';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import {
    FormFieldContainer,
    HelperTextContainer,
    HelperText,
} from './FormField.styles';

const FormField = ({
    label,
    name,
    id,
    type = 'text',
    value,
    onChange,
    placeholder,
    error = false,
    errorMessage,
    helperText,
    required = false,
    disabled = false,
    rightIcon,
    noMargin = false,
    ...rest
}) => {
    const fieldId = id || name || `field-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <FormFieldContainer $noMargin={noMargin}>
            {label && (
                <Label
                    htmlFor={fieldId}
                    required={required}
                    disabled={disabled}>
                    {label}
                </Label>
            )}

            <Input
                id={fieldId}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                error={error}
                disabled={disabled}
                rightIcon={rightIcon}
                required={required}
                {...rest} />

            {(error && errorMessage) && (
                <HelperTextContainer>
                    <HelperText $variant="error">
                        {errorMessage}
                    </HelperText>
                </HelperTextContainer>
            )}

            {(!error && helperText) && (
                <HelperTextContainer>
                    <HelperText $variant="info">
                        {helperText}
                    </HelperText>
                </HelperTextContainer>
            )}
        </FormFieldContainer>
    );
};

export default FormField;