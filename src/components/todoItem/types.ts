import { Todo } from '../../types'

export interface Props {
  todo: Todo
  onToggleDone: (id: string) => void
  onDelete: (id: string) => void
  onTodoUpdate: (id: string, todo: Todo) => void
}

