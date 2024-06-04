import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { TodoItem } from '../types';

describe('TodoList Component', () => {
  test('renders TodoList with all todos', () => {
    const mockedTodos: TodoItem[] = [
      { id: '1', title: 'Test Todo 1', isCompleted: false },
      { id: '2', title: 'Test Todo 2', isCompleted: true },
    ];

    render(<TodoList filter="all" todos={mockedTodos} />);

    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  });

  test('renders TodoList with only incomplete todos', () => {
    const mockedTodos: TodoItem[] = [
      { id: '1', title: 'Test Todo 1', isCompleted: false },
      { id: '2', title: 'Test Todo 2', isCompleted: true },
    ];

    render(<TodoList filter="todo" todos={mockedTodos} />);

    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Todo 2')).not.toBeInTheDocument();
  });

  test('renders TodoList with only completed todos', () => {
    const mockedTodos: TodoItem[] = [
      { id: '1', title: 'Test Todo 1', isCompleted: false },
      { id: '2', title: 'Test Todo 2', isCompleted: true },
    ];

    render(<TodoList filter="completed" todos={mockedTodos} />);

    expect(screen.queryByText('Test Todo 1')).not.toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  });
});
