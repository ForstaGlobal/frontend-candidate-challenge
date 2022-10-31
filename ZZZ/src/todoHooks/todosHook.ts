import { Todo } from '../types'
import useUndo from '../undoRedo/useUndo'
import { addTodo, deleteTodo, generateTodoFromText, toggleDone } from './utils'

export function useTodos (initialTodos: Todo[] = []) {

  const [todosState, {
    set: setTodos,
    undo,
    redo,
    canUndo,
    canRedo,
  }] = useUndo<Todo[]>(initialTodos)

  const { present: todos } = todosState

  const onTodoAdd = (todoText: string) => setTodos(addTodo(todos, generateTodoFromText(todoText), 'START'))

  const onToggleDone = (id: string) => {
    setTodos(toggleDone(todos, id))
  }

  const onTodoUpdate = (id: string, updatedTodo: Todo) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...updatedTodo, updatedAt: new Date() } : todo))
  }

  const onDelete = (id: string) => {
    setTodos((deleteTodo(todos, id)))
  }

  return {
    todos,
    setTodos,
    onTodoAdd,
    onToggleDone,
    onTodoUpdate,
    onDelete,
    undo,
    redo,
    canUndo,
    canRedo,
  }
}

