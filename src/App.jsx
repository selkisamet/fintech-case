import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Text from './components/atoms/Text/Text';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <Text variant="heading1" as="h1">Heading 1 - Fintech Platform</Text>
          <Text variant="heading2" as="h2" style={{ marginTop: '1rem' }}>Heading 2 - Dashboard Overview</Text>
          <Text variant="heading3" as="h3" style={{ marginTop: '1rem' }}>Heading 3 - Monthly Report</Text>
          <Text variant="heading4" as="h4" style={{ marginTop: '1rem' }}>Heading 4 - Section Title</Text>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <Text variant="subtitle1">Subtitle 1 - This is a larger subtitle text</Text>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <Text variant="caption" style={{ marginTop: '1rem' }}>
            Caption - Very small text for captions, footnotes, and fine print.
          </Text>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <Text variant="body1">
            Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
          <Text variant="body2" style={{ marginTop: '1rem' }}>
            Body 2 - Smaller body text for secondary content.
            This is commonly used for descriptions and less important information.
          </Text>
          <Text variant="caption" style={{ marginTop: '1rem' }}>
            Caption - Very small text for captions, footnotes, and fine print.
          </Text>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <Text variant="heading3" as="h3" style={{ marginBottom: '1rem' }}>Color Variants</Text>
          <Text color="primary">Primary text color (default)</Text>
          <Text color="secondary">Secondary text color</Text>
          <Text color="disabled">Disabled text color</Text>
          <Text color="error">Error text color</Text>
          <Text color="success">Success text color</Text>
          <Text color="warning">Warning text color</Text>
          <Text color="brand">Brand color text</Text>
          <Text customColor="#FF6B9E">Custom color text (pink)</Text>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <Text variant="heading3" as="h3" style={{ marginBottom: '1rem' }}>Text Alignment</Text>
          <Text align="left" style={{ marginBottom: '0.5rem' }}>Left aligned text (default)</Text>
          <Text align="center" style={{ marginBottom: '0.5rem' }}>Center aligned text</Text>
          <Text align="right" style={{ marginBottom: '0.5rem' }}>Right aligned text</Text>
          <Text align="justify">Justify aligned text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <Text variant="heading3" as="h3" style={{ marginBottom: '1rem' }}>Font Weight Override</Text>
          <Text weight="light">Light weight text (300)</Text>
          <Text weight="regular">Regular weight text (400)</Text>
          <Text weight="medium">Medium weight text (500)</Text>
          <Text weight="semibold">Semibold weight text (600)</Text>
          <Text weight="bold">Bold weight text (700)</Text>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <Text variant="heading3" as="h3" style={{ marginBottom: '1rem' }}>Polymorphic Component (Same style, different HTML tags)</Text>
          <Text as="p">This is rendered as a &lt;p&gt; tag</Text>
          <Text as="div">This is rendered as a &lt;div&gt; tag</Text>
          <Text as="span">This is rendered as a &lt;span&gt; tag</Text>
          <Text as="strong">This is rendered as a &lt;strong&gt; tag</Text>
        </div>

        <div style={{ padding: '2rem', backgroundColor: theme.colors.primary }}>
          <Text variant="heading2" as="h2" style={{ marginBottom: '0.5rem' }}>Welcome to Fintech</Text>
          <Text variant="subtitle1" color="secondary" style={{ marginBottom: '1.5rem' }}>Track your finances with ease</Text>
          <Text variant="body1" style={{ marginBottom: '1rem' }}>Our platform helps you manage your financial transactions, monitor your total balance, and track your business capital efficiently.</Text>
          <Text variant="caption" color="secondary">Last updated: 2 minutes ago</Text>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;