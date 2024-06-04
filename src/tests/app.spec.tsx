import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('TodoApp', () => {
  it('renders app', () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it('renders initial items', () => {
    render(<App />);
    expect(screen.getByText('ToDo App')).toBeInTheDocument();
  });
});
