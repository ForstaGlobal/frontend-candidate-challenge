import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleButtons from '../components/ToggleButtons';

describe('ToggleButtons Component', () => {
  it('renders ToggleButtons component', () => {
    const mockSetFilter = jest.fn();
    render(<ToggleButtons setFilter={mockSetFilter} />);
    expect(screen.getByLabelText('All')).toBeInTheDocument();
    expect(screen.getByLabelText('Todo')).toBeInTheDocument();
    expect(screen.getByLabelText('Completed')).toBeInTheDocument();
  });
});
