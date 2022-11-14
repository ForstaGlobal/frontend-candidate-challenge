import { TodoStatus } from "../enums/TodoEnums";
import { Todo } from "../types/TodoTypes";
const uniqid = require('uniqid');

const generateTodo = (text: string): Todo => {
  return {
    id: uniqid(),
    text,
    status: TodoStatus.PENDING,
    createdAt: new Date()
  }
}

const addTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return [todo].concat(todos)
}

const toggleDone = (todos: Todo[], id: string): Todo[] => {
  return todos.map((todo) => (todo.id !== id) ? todo : { ...todo, status: (todo.status === TodoStatus.PENDING) ? TodoStatus.COMPLETED : TodoStatus.PENDING })
}

const deleteTodo = (todos: Todo[], id: string): Todo[] => {
  return todos.filter((todo) => todo.id !== id)
}

export {
  addTodo,
  generateTodo,
  toggleDone,
  deleteTodo
}