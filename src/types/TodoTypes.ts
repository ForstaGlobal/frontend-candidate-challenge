import { TodoActions, TodoStatus } from "../enums/TodoEnums";

export interface Todo {
  id: string,
  text: string,
  status: TodoStatus,
  createdAt: Date,
  updatedAt?: Date
}

// An interface for our actions
export interface TodoAction {
  type: TodoActions;
  payload?: string;
}

// An interface for our state
export interface TodoState {
  todos: Todo[];
}