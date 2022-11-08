import React from 'react';
import App from '../App';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {TodoForm} from '../components/TodoForm';
import {Provider} from 'react-redux';
import {ITask} from '../models/ITask';
import {TodoItem} from '../components/TodoItem';
import {combineReducers, createStore} from '@reduxjs/toolkit';
import {todoSlice} from '../store/slices/todo.slice';

export function createTestStore() {
  const store = createStore(
      combineReducers({
        todos: todoSlice.reducer,
      })
  );
  return store;
}
const MockComponent = (component: JSX.Element) => {
  const store = createTestStore();
  return (
      <Provider store={store}>
        {component}
      </Provider>
  )
};

describe('TodoApp', () => {
  it('renders app', () => {
    const app = render(MockComponent(<App/>));
    expect(app).not.toBeUndefined();
  });
  describe('Todo form', () => {
    it('should render input element ', async () => {
      render(MockComponent(<TodoForm/>));
      const inputElement = screen.getByPlaceholderText('Type here ...');
      expect(inputElement).toBeInTheDocument();
    });
    it('should be able to type in input ', async () => {
      render(MockComponent(<TodoForm/>));
      const inputElement = screen.getByPlaceholderText('Type here ...');
      fireEvent.change(inputElement, {target: {value: 'To do a project for Forsta'}});
      expect(inputElement.value).toBe('To do a project for Forsta');
    });
    it('should have empty input when add button is clicked', async () => {
      render(MockComponent(<TodoForm/>));
      const inputElement = screen.getByPlaceholderText('Type here ...');
      const buttonElement = screen.getByRole('button', {name: 'Add task'});
      fireEvent.change(inputElement, {target: {value: 'To do a project for Forsta'}});
      fireEvent.click(buttonElement);
      expect(inputElement.value).toBe('');
    });
  });
  describe('Todo Item', () => {
    let testData: ITask = {
      done: false,
      id: 1,
      text: 'Test 1',
    };
    it('should display todo with a unique ID', async () => {
      render(MockComponent(<TodoItem todoItem={testData}/>));
      const spanElement = screen.getByTestId(`todo${testData.id}`);
      expect(spanElement).toBeInTheDocument();
    });
    it('task should not have done class when initially rendered', async () => {
      render(MockComponent(<TodoItem todoItem={testData}/>));
      const liElement = screen.getAllByRole('listitem').find(listitem => listitem.textContent === testData.text);
      expect(liElement).not.toHaveClass('done');
    });
    it('task should be completed when click the checkbox', async () => {
      render(MockComponent(<TodoItem todoItem={testData}/>));
      const checkBox = screen.getByRole('checkbox');
      fireEvent.click(checkBox);
      expect(checkBox).toBeChecked();
    });
    it('task should be in edit mood when click edit icon', async () => {
      render(MockComponent(<TodoItem todoItem={testData}/>));
      const editImage = screen.getByTestId('edit-img');
      fireEvent.click(editImage);
      const inputElement = screen.getByTestId('edit-input');
      expect(inputElement).toBeVisible();
    });
  });
});