import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Button from './components/atoms/Button/Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div style={{ padding: '2rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Button Component Test</h1>

        <Button variant="primary" fullWidth>Create Account</Button>
        <Button variant="social" fullWidth>Sign up with google</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;