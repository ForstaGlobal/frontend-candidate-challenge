import { TodoType } from '../models/todo';

export interface AppState {
  todos: TodoType[];
  showPopup: boolean;
  selectedTodo: TodoType | null;
  searchQuery: string | "";
  filterCategory: string | "";
}