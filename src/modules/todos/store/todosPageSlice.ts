import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ItemProps } from "../pages/TodosPage";

interface UpdateTodo {
  task: string;
  id: string;
}

interface UpdateStatus {
  id: string;
  completed: boolean;
}

const initialState = {
  allTodos: [
    {
      id: "1",
      task: "Use your time...",
      completed: false,
    },
    { id: "2", task: "Never give up...", completed: false },
  ],
};

export interface InitialState {
  allTodos: Array<ItemProps>;
}

const todosPageSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodo(state: InitialState, action: PayloadAction<string>) {
      const uniqueId = uuidv4();
      return {
        ...state,
        allTodos: [
          { id: uniqueId, task: action.payload, completed: false },
          ...state.allTodos,
        ],
      };
    },
    deleteTodo(state: InitialState, action: PayloadAction<string>) {
      return {
        ...state,
        allTodos: [
          ...state.allTodos.filter(
            (todo: ItemProps) => todo.id !== action.payload
          ),
        ],
      };
    },
    updateTodo(state: InitialState, action: PayloadAction<UpdateTodo>) {
      return {
        ...state,
        allTodos: state.allTodos.map((todo: ItemProps) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }
          return {
            ...todo,
            task: action.payload.task,
          };
        }),
      };
    },
    updateStatus(state: InitialState, action: PayloadAction<UpdateStatus>) {
      return {
        ...state,
        allTodos: state.allTodos.map((todo: ItemProps) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }
          return {
            ...todo,
            completed: !action.payload.completed,
          };
        }),
      };
    },
  },
});

export const { addNewTodo, deleteTodo, updateTodo, updateStatus } =
  todosPageSlice.actions;

export default todosPageSlice.reducer;
