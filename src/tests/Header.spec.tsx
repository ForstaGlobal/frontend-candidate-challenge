import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  it('renders Header component', () => {
    render(<Header />);
    expect(screen.getByText('Forsta')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument();
  });
});
