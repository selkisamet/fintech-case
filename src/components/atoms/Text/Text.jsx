import { StyledText } from './Text.styles';

const Text = ({ children, as = 'p', variant = 'body1', color, align, weight, customColor, ...rest }) => {
    return (
        <StyledText as={as} $variant={variant} $colorVariant={color} $align={align} $weight={weight} $customColor={customColor} {...rest}>
            {children}
        </StyledText>
    )
}

export default Text