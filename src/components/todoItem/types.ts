import { Todo } from "../../types/TodoTypes";

export interface Props {
  'data-testid': string;
  todo: Todo;
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo: (id: string, text: string) => void;
}