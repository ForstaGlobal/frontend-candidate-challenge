import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../models/types';
 const initialState: AppState = {
    todos: [],
  };

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo:(state, action) => { 
      state.todos.push(action.payload);
    },    
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.map((todo) => {
            if(todo.id === action.payload) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
    }
  },
}); 

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
