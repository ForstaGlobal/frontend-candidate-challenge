import React from 'react';

import App from '../App';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/test-utils';

describe('TodoApp', () => {
  it('renders app', () => {
    const app = renderWithProviders(<App />);
    expect(app).not.toBeUndefined();
  });

  describe('UI with no initial state', () => {
    it('should display no todo text', () => {
      renderWithProviders(<App />);

      expect(screen.getByText(/No todos in the list/i)).toBeDefined();
      // TODO: Verify second todo
    });

    it(`should render todo input with placeholder text 'Enter new todo here'`, () => {
      renderWithProviders(<App />);
      expect(
        screen.getByPlaceholderText(/enter new todo here/i)
      ).toBeInTheDocument();
    });

    it(`should render button with text 'Add'`, () => {
      renderWithProviders(<App />);
      expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    });
  });

  describe('UI with initial state', () => {
    const initialState = {
      todos: [
        {
          id: '1',
          text: 'Buy milk',
          done: false,
        },
      ],
    };
    it('should not display no todo text', () => {
      renderWithProviders(<App />, {
        preloadedState: {
          todo: initialState,
        },
      });

      expect(screen.queryByText(/No todos in the list/i)).toBeNull();
    });
    it('should display Buy milk text', () => {
      renderWithProviders(<App />, {
        preloadedState: {
          todo: initialState,
        },
      });

      expect(screen.getByText(/buy milk/i)).toBeInTheDocument();
    });
    it('should display edit button', () => {
      renderWithProviders(<App />, {
        preloadedState: {
          todo: initialState,
        },
      });

      expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    });
    it('should display delete button', () => {
      renderWithProviders(<App />, {
        preloadedState: {
          todo: initialState,
        },
      });

      expect(
        screen.getByRole('button', { name: /delete/i })
      ).toBeInTheDocument();
    });
  });

  // TODO: Test app functionality: Create, edit, delete, mark as done.
  describe('UI with user interaction', () => {
    const todoText = 'Buy milk';
    const initialState = {
      todos: [
        {
          id: '1',
          text: todoText,
          done: false,
        },
      ],
    };
    it(`should add a new todo with text ${todoText}`, async () => {
      renderWithProviders(<App />);
      const addButton = screen.getByRole('button', { name: /add/i });
      const newTodoInput = screen.getByTestId('new-todo-input');
      fireEvent.change(newTodoInput, { target: { value: todoText } });
      fireEvent.click(addButton);
      await waitFor(() => {
        expect(screen.getByText(/buy milk/i)).toBeInTheDocument();
      });
    });
    it(`should not add a new todo when text input is empty`, async () => {
      renderWithProviders(<App />);
      const addButton = screen.getByRole('button', { name: /add/i });
      const newTodoInput = screen.getByTestId('new-todo-input');
      fireEvent.change(newTodoInput, { target: { value: '' } });
      fireEvent.click(addButton);
      expect(screen.getByText(/No todos in the list/i)).toBeInTheDocument();
    });
    it('should be able to edit a todo', async () => {
      const newTodoText = 'Buy banana';
      renderWithProviders(<App />, {
        preloadedState: {
          todo: initialState,
        },
      });

      const editButton = screen.getByRole('button', { name: /edit/i });
      fireEvent.click(editButton);
      const saveButton = screen.getByRole('button', { name: /save/i });
      expect(saveButton).toBeInTheDocument();

      const editTodoInput = screen.getByTestId('edit-todo-input');
      fireEvent.change(editTodoInput, { target: { value: newTodoText } });
      fireEvent.click(saveButton);
      await waitFor(() => {
        expect(screen.getByText(/buy banana/i)).toBeInTheDocument();
      });
    });
    it('should not change the original todo text when the modified text is empty', async () => {
      const newTodoText = '';
      renderWithProviders(<App />, {
        preloadedState: {
          todo: initialState,
        },
      });

      const editButton = screen.getByRole('button', { name: /edit/i });
      fireEvent.click(editButton);
      const saveButton = screen.getByRole('button', { name: /save/i });
      expect(saveButton).toBeInTheDocument();

      const editTodoInput = screen.getByTestId('edit-todo-input');
      fireEvent.change(editTodoInput, { target: { value: newTodoText } });
      fireEvent.click(saveButton);
      await waitFor(() => {
        expect(screen.getByText(/buy milk/i)).toBeInTheDocument();
      });
    });
    it('should delete a todo', async () => {
      renderWithProviders(<App />, {
        preloadedState: {
          todo: initialState,
        },
      });
      const deleteButton = screen.getByRole('button', { name: /delete/i });
      fireEvent.click(deleteButton);

      expect(screen.queryByText(/buy milk/i)).toBeNull();

      expect(screen.getByText(/No todos in the list/i)).toBeInTheDocument();
    });
    it('should toggle todo', () => {
      renderWithProviders(<App />, {
        preloadedState: {
          todo: initialState,
        },
      });

      const toggleTodoCheckbox = screen.getByTestId('toggle-todo-checkbox-1');
      fireEvent.click(toggleTodoCheckbox);

      expect((toggleTodoCheckbox as HTMLInputElement).checked).toBeTruthy();
    });
  });
});
