import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface UpdateTodo {
  task: string;
  _id: string;
}

interface UpdateStatus {
  _id: string;
  status: boolean;
}

const todosPageSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        _id: 1,
        task: "Use your time...",
        status: false,
      },
      { _id: 2, task: "Never give up...", status: false },
    ],
  },
  reducers: {
    addNewTodo(state: any, action: PayloadAction<string>) {
      const uniqueId = uuidv4();
      return {
        ...state,
        allTodos: [
          ...state.allTodos,
          { _id: uniqueId, task: action.payload, status: false },
        ],
      };
    },
    deleteTodo(state: any, action: PayloadAction<string>) {
      return {
        ...state,
        allTodos: [
          ...state.allTodos.filter((todo: any) => todo._id !== action.payload),
        ],
      };
    },
    updateTodo(state: any, action: PayloadAction<UpdateTodo>) {
      return {
        ...state,
        allTodos: state.allTodos.map((todo: any) => {
          if (todo._id !== action.payload._id) {
            return todo;
          }
          return {
            ...todo,
            task: action.payload.task,
          };
        }),
      };
    },
    updateStatus(state: any, action: PayloadAction<UpdateStatus>) {
      return {
        ...state,
        allTodos: state.allTodos.map((todo: any) => {
          if (todo._id !== action.payload._id) {
            return todo;
          }
          return {
            ...todo,
            status: !action.payload.status,
          };
        }),
      };
    },
  },
});

export const { addNewTodo, deleteTodo, updateTodo, updateStatus } =
  todosPageSlice.actions;

export default todosPageSlice.reducer;
