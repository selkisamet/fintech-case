import { Component } from 'react';
import {
    ErrorContainer,
    ErrorCard,
    ErrorTitle,
    ErrorMessage,
    ErrorActions,
    ErrorButton,
    ErrorDetails,
    ErrorStack,
} from './ErrorBoundary.styles';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        // Log error to console or send to error reporting service
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    handleRefresh = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer>
                    <ErrorCard>
                        <ErrorTitle>Something went wrong</ErrorTitle>
                        <ErrorMessage>
                            We apologize for the inconvenience. Please try again or contact
                            support if the problem persists.
                        </ErrorMessage>

                        <ErrorActions>
                            <ErrorButton onClick={this.handleReset}>
                                Try Again
                            </ErrorButton>
                            <ErrorButton onClick={this.handleRefresh} variant="secondary">
                                Refresh Page
                            </ErrorButton>
                        </ErrorActions>

                        {process.env.NODE_ENV === 'development' && (
                            <ErrorDetails>
                                <summary>Error Details (Development Only)</summary>
                                <ErrorStack>
                                    {this.state.error && this.state.error.toString()}
                                    {'\n\n'}
                                    {this.state.errorInfo?.componentStack}
                                </ErrorStack>
                            </ErrorDetails>
                        )}
                    </ErrorCard>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;