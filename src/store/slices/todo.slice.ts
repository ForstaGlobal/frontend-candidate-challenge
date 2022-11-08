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
        updateTodos: (state: ITask[], action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        text: action.payload.text,
                    };
                }
                return todo;
            });
        },
        completeTodos: (state: ITask[], action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                }
                return todo;
            });
        },
    },
});

export const {
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos,
} = todoSlice.actions;
