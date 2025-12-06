import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Button from './components/atoms/Button/Button';
import Input from './components/atoms/Input/Input';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorInput, setErrorInput] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>Input Component Test</h1>
        {/* Basic input */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Basic Input</h2>
          <Input
            placeholder="Enter your name..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Email input */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Email Input</h2>
          <Input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password input */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Password Input</h2>
          <Input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Error state */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Error State</h2>
          <Input
            placeholder="This input has an error"
            value={errorInput}
            onChange={(e) => setErrorInput(e.target.value)}
            error={true}
            errorMessage="Bu alan zorunludur"
          />
        </div>

        {/* Disabled input */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Disabled Input</h2>
          <Input
            placeholder="Disabled input"
            value="Cannot edit this"
            disabled={true}
          />
        </div>


        {/* Form example */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Form Example</h2>
          <form onSubmit={(e) => {
            e.preventDefault(); alert(`Email: ${email}\nPassword: ${password}`);
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" fullWidth>
              Submit Form
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;