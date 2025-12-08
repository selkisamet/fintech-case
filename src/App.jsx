import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Button from './components/atoms/Button/Button';
import Spinner from './components/atoms/Spinner/Spinner';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>Spinner Component Test</h1>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Sizes</h2>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div>
              <Spinner size="small" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Small (16px)</p>
            </div>
            <div>
              <Spinner size="medium" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Medium (24px)</p>
            </div>
            <div>
              <Spinner size="large" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Large (40px)</p>
            </div>
            <div>
              <Spinner size={60} />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Custom (60px)</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Colors</h2>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <Spinner color="primary" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Primary</p>
            </div>
            <div>
              <Spinner color="secondary" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Secondary</p>
            </div>
            <div>
              <Spinner color="success" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Success</p>
            </div>
            <div>
              <Spinner color="error" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Error</p>
            </div>
            <div>
              <Spinner color="#FF6B9D" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Custom (Pink)</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Thickness</h2>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div>
              <Spinner size="large" thickness={2} />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Thin (2px)</p>
            </div>
            <div>
              <Spinner size="large" thickness={4} />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Normal (4px)</p>
            </div>
            <div>
              <Spinner size="large" thickness={6} />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Thick (6px)</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Speed</h2>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div>
              <Spinner size="large" speed="fast" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Fast (0.6s)</p>
            </div>
            <div>
              <Spinner size="large" speed="normal" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Normal (0.8s)</p>
            </div>
            <div>
              <Spinner size="large" speed="slow" />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Slow (1.2s)</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
            Spinner in Button (Loading State)
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button $isLoading>
              <Spinner size="small" color="white" thickness={2} style={{ marginRight: '0.5rem' }} /> Loading...
            </Button>
            <Button variant="secondary" $isLoading>Processing</Button>
            <Button variant="outline" $isLoading>Submitting</Button>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
            Centered Loading (Page Loading Scenario)
          </h2>
          <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.secondary, borderRadius: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <Spinner size="large" />
              <p style={{ marginTop: '1rem', color: theme.colors.text.secondary, fontSize: '0.875rem' }}>
                Loading data...
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
            Inline Spinner with Text
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Spinner size="small" />
            <span>Fetching latest data...</span>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;