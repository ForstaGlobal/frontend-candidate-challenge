import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  errorMessage?: string;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      const errorMessage = this.props.errorMessage ?? "Something went wrong.";
      return <h1>{errorMessage}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
