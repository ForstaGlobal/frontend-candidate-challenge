import { Todo } from './types'
const uniqid = require('uniqid');

export function addTodo (todos: Todo[], todo: Todo, position = 'START'): Todo[] {
  if (position === 'START') {
    return [todo].concat(todos)
  }
  return todos.concat([todo])
}

export function generateTodoFromText (text: string): Todo {
  return {
    id: uniqid(),
    text,
    done: false,
    createdAt: new Date()
  }
}

export function toggleDone (todos: Todo[], idToToggle: string): Todo[] {
  return todos.map((todo) =>
    todo.id !== idToToggle
      ? todo
      : { ...todo, done: !todo.done })

}

export function deleteTodo (todos: Todo[], idToRemove: string): Todo[] {
  return todos.filter((todo) => todo.id !== idToRemove)
}
