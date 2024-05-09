import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface ITodoItem {
  id: string;
  text: string;
  done: boolean;
}

export interface todoState {
  todos: ITodoItem[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: todoState = {
  todos: [],
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        done: false,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      };
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    editTodo: (state, action: PayloadAction<ITodoItem>) => {
      const { id, text } = action.payload;
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : todo
      );
      return {
        ...state,
        todos: newTodos,
      };
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
