import {createSlice} from '@reduxjs/toolkit';
import {ITask} from '../../models/ITask';

const initialState: ITask[] = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    },
});
