import { Todo } from "../../types/TodoTypes";

export interface Props {
  'data-testid': string,
  todo: Todo,
  onDeleteTodo: (id: string) => void
  onUpdateTodo: (id: string) => void
}