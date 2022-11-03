import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface ToDoState {
  todoList: any;
}

const initialState: ToDoState = {
  todoList: [
    {
      id: 1,
      name: "Buy Milk",
      done: false,
      editable: false,
    },
    {
      id: 2,
      name: "Buy cow",
      done: false,
      editable: false,
    }
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<any>) => {
      state.todoList = action.payload;
    },

    updateTask: (state, action: PayloadAction<any>) => {
      state.todoList = action.payload;
    },
  },
});

export const { addTask, updateTask } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todoList;


export default todoSlice.reducer;
