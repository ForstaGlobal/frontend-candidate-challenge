import { TodoStatus } from "../enums/TodoEnums";
import { payload, Todo } from "../types/TodoTypes";
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

const updateTodo = (todos: Todo[], payload: payload): Todo[] => {
  if (typeof payload !== 'object') {
    return todos;
  }
  return todos.map((todo) => (todo.id !== payload.id) ? todo : { ...todo, text: payload.text, updatedAt: new Date() })
}

const toggleDone = (todos: Todo[], id: payload): Todo[] => {
  if (typeof id !== 'string') {
    return todos;
  }
  return todos.map((todo) => (todo.id !== id) ? todo : { ...todo, status: (todo.status === TodoStatus.PENDING) ? TodoStatus.COMPLETED : TodoStatus.PENDING, updatedAt: new Date() })
}

const deleteTodo = (todos: Todo[], id: payload): Todo[] => {
  if (typeof id !== 'string') {
    return todos;
  }
  return todos.filter((todo) => todo.id !== id)
}

export {
  addTodo,
  generateTodo,
  updateTodo,
  toggleDone,
  deleteTodo
}