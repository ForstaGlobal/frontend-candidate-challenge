import { TodoActions, TodoStatus } from "../enums/TodoEnums";

export interface Todo {
  id: string;
  text: string;
  status: TodoStatus;
  createdAt: Date;
  updatedAt?: Date;
}

export type payload = string | { id: string, text: string };

// An interface for our actions
export interface TodoAction {
  type: TodoActions;
  payload?: payload;
}

// An interface for our state
export interface TodoState {
  todos: Todo[];
}