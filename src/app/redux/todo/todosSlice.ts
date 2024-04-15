import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../models/types';
 export const initialState: AppState = {
    todos: [],
    showPopup: false,
    selectedTodo: null,
    searchQuery: "", 
    filterCategory: "",
  };

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo:(state, action) => { 
      state.todos.unshift(action.payload);
    },    
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    searchTodo: (state, action) => {
      state.searchQuery = action.payload.toLowerCase();
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
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
    },
    showHidePopup: (state) => {
      state.showPopup = !state.showPopup;
    },
    selectTodo: (state, action: PayloadAction<number>) => {
      state.selectedTodo=state.todos.find(todo => todo.id === action.payload) || null; 
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      if(action.payload === state.filterCategory){
        state.filterCategory = "";
      }else{
        state.filterCategory = action.payload;
      }
    }
  },
}); 

export const { addTodo, removeTodo, toggleTodo, showHidePopup,selectTodo,updateTodo, searchTodo, filterByCategory } = todosSlice.actions;

export default todosSlice.reducer;
