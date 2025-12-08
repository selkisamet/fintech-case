import { SpinnerContainer, SpinnerSVG } from './Spinner.styles';

const Spinner = ({ size = 'medium', color = 'primary', thickness = 4, speed = 'normal', ...rest }) => {
    const getNumericSize = () => {
        if (typeof size === 'number') return size;
        const sizeMap = { small: 16, medium: 24, large: 40 };
        return sizeMap[size] || 24;
    };

    const numericSize = getNumericSize();
    const center = numericSize / 2;
    const radius = center - thickness / 2;

    return (
        <SpinnerContainer $size={size} {...rest}>
            <SpinnerSVG viewBox={`0 0 ${numericSize} ${numericSize}`} $color={color} $thickness={thickness} $speed={speed}>
                <circle cx={center} cy={center} r={radius} />
            </SpinnerSVG>
        </SpinnerContainer>
    );
};

export default Spinner;