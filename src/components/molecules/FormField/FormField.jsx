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
    type = 'text',
    name,
    value,
    onChange,
    error,
    errorMessage,
    placeholder,
    required,
    disabled = false,
    leftIcon,
    rightIcon,
    id,
}) => {
    const fieldId = id || name || `field-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <FormFieldContainer>
            {label && (
                <Label htmlFor={fieldId} required={required}>
                    {label}
                </Label>
            )}
            <Input
                id={fieldId}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                error={error}
                placeholder={placeholder}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                disabled={disabled}  // ← EKLE
            />
            {error && errorMessage && <HelperText $variant="error">{errorMessage}</HelperText>}
        </FormFieldContainer>
    );
};

export default FormField;