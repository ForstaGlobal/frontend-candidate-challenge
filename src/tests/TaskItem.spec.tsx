import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskItem from '../components/TaskItem';

const mockTodo = {
  id: '1',
  title: 'Test Task',
  isCompleted: false,
};

describe('TaskItem Component', () => {
  it('renders TaskItem component', async () => {
    await act(async () => {
      render(<TaskItem todo={mockTodo} />);
    });
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});
