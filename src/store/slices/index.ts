import {combineReducers} from '@reduxjs/toolkit';
import {todoSlice} from './todo.slice';

export const rootReducer = combineReducers({
    todos: todoSlice.reducer
})
