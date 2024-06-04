import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToDoContainer from '../components/ToDoContainer';

jest.mock('../components/AddTask', () => {
  return () => <div data-testid="add-task">Mocked AddTask</div>;
});

jest.mock('../components/TodoList', () => {
  return () => <div data-testid="todo-list">Mocked TodoList</div>;
});

describe('ToDoContainer Component', () => {
  it('renders ToDoContainer component', () => {
    render(<ToDoContainer />);
    expect(screen.getByTestId('add-task')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
  });

  it('renders the header and icon', () => {
    render(<ToDoContainer />);
    expect(screen.getByText('ToDo App')).toBeInTheDocument();
    expect(screen.getByTestId('CheckCircleOutlineRoundedIcon')).toBeInTheDocument();
  });
});
