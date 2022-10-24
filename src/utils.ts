import { Todo } from './types' 
const uniqid = require('uniqid');

export function addTodo (todos: Todo[], todo: Todo, position = 'START') {
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
