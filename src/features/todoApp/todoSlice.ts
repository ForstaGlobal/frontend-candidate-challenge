import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TodoItem {
    id: string;
}

export interface todoState {
  todos: TodoItem[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: todoState = {
  todos: [],
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state) => {
    },
    deleteTodo: (state) => {
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    editTodo: (state, action: PayloadAction<TodoItem>) => {
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.todo.todos;

export default counterSlice.reducer;
