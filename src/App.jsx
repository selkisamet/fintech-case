import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Button from './components/atoms/Button/Button';
import FormField from './components/molecules/FormField/FormField';

function App() {
  // Form state'leri
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  // Basit email validasyonu
  const validateEmail = (value) => {
    if (!value) {
      setEmailError('Email zorunludur');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Geçerli bir email girin');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>FormField Component Test</h1>

        {/* Basic FormField */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Basic FormField</h2>
          <FormField
            label="Username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Required field */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Required Field</h2>
          <FormField
            label="Email Address"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={handleEmailChange}
            required
            error={!!emailError}
            errorMessage={emailError}
          />
        </div>

        {/* Password field */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Password Field</h2>
          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            helperText="Password must be at least 8 characters"
          />
        </div>

        {/* With icons */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>With Icons</h2>
          <FormField
            label="Email"
            name="email-icon"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Disabled field */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Disabled Field</h2>
          <FormField
            label="Disabled Input"
            name="disabled"
            defaultValue="Cannot edit this"
            disabled
          />
        </div>

        {/* Complete form example */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>
            Complete Form Example
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // Validasyon
              if (!email || emailError) {
                alert('Please fix errors');
                return;
              }

              alert(`Form submitted!\nEmail: ${email}\nPassword: ${password}`);
            }}
            style={{
              padding: '2rem',
              backgroundColor: theme.colors.gray.gray1,
              borderRadius: "1rem"
            }}
          >
            <FormField
              label="Email Address"
              name="form-email"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={handleEmailChange}
              required
              error={!!emailError}
              errorMessage={emailError}
            />

            <FormField
              label="Password"
              name="form-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              helperText="Minimum 8 characters"
            />

            <FormField
              label="Confirm Password"
              name="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              noMargin
            />

            <Button
              type="submit"
              fullWidth
              style={{ marginTop: '1.5rem' }}
            >
              Sign In
            </Button>
          </form>
        </div>

        {/* Error showcase */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
            Error States
          </h2>
          <FormField
            label="Email"
            name="error-example"
            type="email"
            value="invalid-email"
            onChange={() => { }}
            error={true}
            errorMessage="Please enter a valid email address"
            required
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;