import { InputContainer, StyledInput, ErrorMessage, } from './Input.styles';

const Input = ({ type = 'text', value, onChange, placeholder, disabled = false, error = false, errorMessage, id, name, required = false, ...rest }) => {
    return (
        <InputContainer>
            <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} $hasError={error} id={id} name={name} required={required} {...rest} />
            {error && errorMessage && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
        </InputContainer>
    )
}

export default Input