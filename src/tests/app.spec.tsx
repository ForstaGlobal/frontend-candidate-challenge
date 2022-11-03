import React from 'react';

import App from "../App";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToDoList from '../containers/TodoList/components/ToDoList';
import AddTask from '../containers/TodoList/components/AddTask/AddTask';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe("TodoApp", () => {
  const initialState = {
    todos: [
      {
        name: "Buy milk",
        done: false
      },
    ]
  };
  const mockStore = configureStore();
  let store;

  // TODO: Test app functionality: Create, edit, delete, mark as done.

  it("checking is a task done", () => {
    store = mockStore(initialState);
    const todos = [
      {
        name: "Buy Milk",
        done: false
      }
    ]
    const handleChange = jest.fn()
    render(<ToDoList title={"done"} todos={todos} onUpdate={() => {return 1}} onChange={handleChange} onEdit={() =>{return 1}} onDelete={() =>{return 1}} />)

    const checkbox = screen.getByTestId("done-todo0")
    expect(checkbox).toBe(true)
  });

  it("Is a task created", async () => {
    store = mockStore(initialState);
    const handleClick = jest.fn();
    const todos = [
      {
        name: "Buy Milk",
        done: false
      }
    ]
    const handleChange = jest.fn()
    render(<AddTask todos={todos} onAdd={handleClick} />)
    render(<ToDoList title={"done"} todos={todos} onUpdate={() => {return 1}} onChange={handleChange} onEdit={() =>{return 1}} onDelete={() =>{return 1}} />)

    const button = screen.getByTestId('add')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)

    await waitFor(() => {
      expect(screen.findByText('Walk a dog'))
    })
  });

  it("Is a task deleted", async () => {
    store = mockStore(initialState);
    const todos = [
      {
        name: "Buy Milk",
        done: false
      }
    ]
    const handleChange = jest.fn()
    render(<ToDoList title={"done"} todos={todos} onUpdate={() => {return 1}} onChange={handleChange} onEdit={() =>{return 1}} onDelete={() =>{return 1}} />)

    const checkbox = screen.getByTestId('delete-todo0')
    fireEvent.click(checkbox)

    await waitFor(() => {
      expect(checkbox).toBeChecked()
    })
  });

  it("Is a task edited", async () => {
    store = mockStore(initialState);
    const todos = [
      {
        name: "Read a book",
        done: false,
        editable: true
      }
    ]
    const handleChange = jest.fn()
    render(<ToDoList title={"not done"} todos={todos} onUpdate={() => {return 1}} onChange={(e) => handleChange(e, 1)} onEdit={() =>{return 1}} onDelete={() =>{return 1}} />)

    const editInput = screen.getByTestId('edit-todo0')
    const text = 'Read a book'
    userEvent.type(editInput, text)
    await waitFor(() => {
      expect(editInput.textContent).toEqual(text)
    })
  });

});
