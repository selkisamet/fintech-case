import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  const [currentTheme] = useState(theme);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      <div style={{ display: 'flex', gap: "10px" }}>
        <div style={{ height: "100px", width: "100px", background: currentTheme.colors.primary }}>
          1
        </div>

        <div style={{ height: "100px", width: "100px", background: currentTheme.colors.primary }}>
          2
        </div>

        <div style={{ height: "100px", width: "100px", background: currentTheme.colors.primary }}>
          3
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
