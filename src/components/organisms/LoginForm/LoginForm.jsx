import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../../context/AuthContext';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import {
    FormContainer,
    FormTitle,
    FormSubtitle,
    FormFields,
    FormActions,
    ErrorMessage,
    FormFooter,
} from './LoginForm.styles';
import Text from '../../atoms/Text/Text';
import IconGoogle from '../../icons/IconGoogle';

const LoginForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({ email: '', password: '', });
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState('');
    const { login, isLoading } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }

        if (apiError) {
            setApiError('');
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setApiError('');

        if (!validate()) {
            toast.error('Please fill in all required fields correctly');
            return;
        }

        const result = await login(formData.email, formData.password);

        if (result.success) {
            toast.success('Successfully logged in! Redirecting...');
            if (onSuccess) {
                onSuccess();
            }
        } else {
            const errorMessage = result.error || 'Login failed. Please try again.';
            setApiError(errorMessage);
            toast.error(errorMessage);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Sign In</FormTitle>
            <FormSubtitle>Welcome back! Please enter your details</FormSubtitle>

            {apiError && <ErrorMessage>{apiError}</ErrorMessage>}

            <FormFields>
                <FormField
                    label="Email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    errorMessage={errors.email}
                    placeholder="Enter your email"
                    disabled={isLoading}
                />

                <FormField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    errorMessage={errors.password}
                    placeholder="Enter your password"
                    disabled={isLoading}
                />
            </FormFields>

            <FormActions>
                <Button type="submit" variant="primary" fullWidth loading={isLoading}>
                    Sign In
                </Button>
                <Button type="button" variant="outline" fullWidth loading={isLoading}>
                    <IconGoogle />
                    Sign in with Google
                </Button>
            </FormActions>

            <FormFooter>
                <Text variant="body2" color="disabled">Don't have an account?</Text>
                <a href="/register">
                    Sign up
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <path d="M.901 6.5c6.57-4.936 33.594-8.2 43 0" />
                    </svg>
                </a>
            </FormFooter>
        </FormContainer>
    );
};

export default LoginForm;