import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTask from '../components/AddTask';

describe('AddTask Component', () => {
  it('should render AddTask component', () => {
    const mockAddTodoItem = jest.fn();
    render(<AddTask addTodoItem={mockAddTodoItem} />);
    expect(screen.getByPlaceholderText('Add a new task')).toBeInTheDocument();
    expect(screen.getByLabelText('Add todo')).toBeInTheDocument();
  });

  it('should not call addTodoItem when input is empty', async () => {
    const mockAddTodoItem = jest.fn();
    render(<AddTask addTodoItem={mockAddTodoItem} />);
    const addButton = screen.getByLabelText('Add todo');
    
    await act(async () => {
      userEvent.click(addButton);
    });
    
    expect(mockAddTodoItem).not.toHaveBeenCalled();
  });

  it('should not call addTodoItem when input has only white spaces', async () => {
    const mockAddTodoItem = jest.fn();
    render(<AddTask addTodoItem={mockAddTodoItem} />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    
    await act(async () => {
      userEvent.type(inputElement, '    ');
      userEvent.click(screen.getByLabelText('Add todo'));
    });
    
    expect(mockAddTodoItem).not.toHaveBeenCalled();
  });

  it('should call addTodoItem when correct input is provided', async () => {
    const mockAddTodoItem = jest.fn();
    render(<AddTask addTodoItem={mockAddTodoItem} />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    
    await act(async () => {
      userEvent.type(inputElement, 'New Task');
      userEvent.click(screen.getByLabelText('Add todo'));
    });
    
    expect(mockAddTodoItem).toHaveBeenCalledWith('New Task');
  });
});
