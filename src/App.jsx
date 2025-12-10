import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Card from './components/molecules/Card/Card';
import IconWallet from './components/icons/IconWallet';
import IconPlusWallet from './components/icons/IconPlusWallet';
// import './services/testApi';
// import { useEffect } from 'react';

function App() {
  // API test disabled to prevent rate limiting
  // useEffect(() => {
  //   testApiServices();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>Card Component Test</h1>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Hoverable & Clickable Cards</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <Card icon={<IconWallet />} title="Total balance" amount="$524.21" hoverable clickable onClick={() => alert('Clicked!')} />

            <Card icon={<IconWallet />} title="Total spending" amount="$250.80" hoverable clickable onClick={() => alert('Clicked!')} />

            <Card icon={<IconPlusWallet />} title="Total saved" amount="$550.25" hoverable clickable onClick={() => alert('Clicked!')} />
          </div>
        </div>
      </div>
    </ThemeProvider >
  );
}

export default App;