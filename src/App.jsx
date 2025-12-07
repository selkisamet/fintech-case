import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Button from './components/atoms/Button/Button';
import Input from './components/atoms/Input/Input';
import Label from './components/atoms/Label/Label';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>Label Component Test</h1>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Basic Label</h2>
          <Label htmlFor="basic-input">Username</Label>
          <Input id="basic-input" placeholder="Enter username" />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Required Label</h2>
          <Label htmlFor="email-input" required>Email Address</Label>
          <Input
            id="email-input"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Disabled Label</h2>
          <Label htmlFor="disabled-input" disabled>Disabled Field</Label>
          <Input id="disabled-input" value="Cannot edit" disabled
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Form with Labels</h2>
          <div style={{ marginBottom: '1rem' }}>
            <Label htmlFor="form-email" required>Email</Label>
            <Input id="form-email" type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <Label htmlFor="form-password" required>Password</Label>
            <Input id="form-password" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button fullWidth>Sign In</Button>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
            Label Click Test
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>
            Label'a tıkladığında input focus almalı:
          </p>
          <Label htmlFor="click-test" required>Click me to focus input</Label>
          <Input id="click-test" placeholder="Label'a tıkla"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;