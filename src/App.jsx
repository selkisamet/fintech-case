import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { AuthProvider } from './context/AuthContext';
import LoginForm from './components/organisms/LoginForm';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <div style={{ padding: '4rem 2rem', minHeight: '100vh' }}>
          <LoginForm onSuccess={() => alert('Login successful!')} />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;