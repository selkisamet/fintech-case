import LoginForm from '../../components/organisms/LoginForm';
import Logo from '../../components/atoms/Logo';
import {
    PageContainer,
    LeftSection,
    RightSection,
    ContentWrapper,
    StyledLogo
} from './LoginPage.styles';

const LoginPage = () => {
    const handleLoginSuccess = () => {
        alert('Login successful! Dashboard coming soon...');
    };

    return (
        <PageContainer>
            <LeftSection>
                <ContentWrapper>
                    <StyledLogo>
                        <Logo size="medium" />
                    </StyledLogo>
                    <LoginForm onSuccess={handleLoginSuccess} />
                </ContentWrapper>
            </LeftSection>

            <RightSection></RightSection>
        </PageContainer>
    );
};

export default LoginPage;