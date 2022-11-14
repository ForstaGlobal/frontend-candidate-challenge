import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { Todo } from '../../types/TodoTypes';
import { getInitialTodos } from '../../service/todoService';

describe('TodoList App', () => {
  const fakeTodos: Todo[] = getInitialTodos()

  test('can render react entrypoint', () => {
    render(<App />);
    const title = screen.getByText(/My Todos/i);
    expect(title).toBeInTheDocument();
  });

  test('can render Todo List component', () => {
    render(<App />);
    const title = screen.getByText(/My Todos/i);
    expect(title).toBeInTheDocument();
    setTimeout(() => {
      expect(screen.getByTestId(`todo_${fakeTodos[0].id}`)).toBeInTheDocument()
      expect(screen.getByDisplayValue(fakeTodos[0].text)).toBeInTheDocument()
    }, 600);
  });

  test('can toggle Todo Item as Completed', () => {
    const handleTodoStatusChange = jest.fn()

    render(<App />);
    setTimeout(() => {
      expect(screen.getByTestId(`todo_${fakeTodos[0].id}`)).toBeInTheDocument()
      expect(screen.getByDisplayValue(fakeTodos[0].text)).toBeInTheDocument()
      userEvent.click(screen.getByTestId(`toggle_todo_${fakeTodos[0].id}`))
      expect(handleTodoStatusChange).toBeCalledTimes(1)
    }, 600);
  });

  test('can delete Todo Item', () => {
    const onDeleteTodo = jest.fn()

    render(<App />);
    setTimeout(() => {
      expect(screen.getByTestId(`todo_${fakeTodos[0].id}`)).toBeInTheDocument()
      expect(screen.getByDisplayValue(fakeTodos[0].text)).toBeInTheDocument()
      expect(screen.getByTestId(`delete_dialog_todo_${fakeTodos[0].id}`)).toBeInTheDocument()
      userEvent.click(screen.getByTestId(`delete_dialog_todo_${fakeTodos[0].id}`))
      expect(screen.getByTestId(`delete_todo_${fakeTodos[0].id}`)).toBeInTheDocument()
      userEvent.click(screen.getByTestId(`delete_todo_${fakeTodos[0].id}`))
      expect(onDeleteTodo).toBeCalledTimes(1)
    }, 600);
  });
})
