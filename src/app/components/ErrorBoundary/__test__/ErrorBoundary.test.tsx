import { render , screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">Child component</div>
      </ErrorBoundary>
    );

    const childElement = screen.getByTestId('child');
    expect(childElement).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const errorMessage = 'Custom error message';

    render(
      <ErrorBoundary errorMessage={errorMessage}>
        <ChildWithError />
      </ErrorBoundary>
    );

    const errorMessageElement = screen.getByText(errorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });
});

function ChildWithError() {
  throw new Error('Test error');
  return <div>Child component</div>;
}
