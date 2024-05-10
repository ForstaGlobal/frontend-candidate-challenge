import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface ITodoItem {
  id: string;
  text: string;
  done: boolean;
}

export interface TodoState {
  todos: ITodoItem[];
}

const initialState: TodoState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        const newTodo = {
          id: uuidv4(),
          text: action.payload,
          done: false,
        };
        return {
          ...state,
          todos: [newTodo, ...state.todos],
        };
      } else {
        return state;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    editTodo: (state, action: PayloadAction<ITodoItem>) => {
      const { id, text } = action.payload;
      if (text) {
        const newTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: text } : todo
        );
        return {
          ...state,
          todos: newTodos,
        };
      } else {
        return state;
      }
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
      return {
        ...state,
        todos: newTodos,
      };
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodo } =
  counterSlice.actions;

export default counterSlice.reducer;
