import {createSlice} from '@reduxjs/toolkit';
import {ITask} from '../../models/ITask';

const initialState: ITask[] = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodos: (state: ITask[], action) => {
            state.unshift(action.payload);
            return state;
        },
        removeTodos: (state: ITask[], action) => {
            return state.filter((item) => item.id !== action.payload);
        },
});

export const {
    addTodos,
    removeTodos,
} = todoSlice.actions;
