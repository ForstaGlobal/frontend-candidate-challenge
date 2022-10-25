import React, { useState } from 'react'
import { Todo } from '../types'
import { addTodo, deleteTodo, generateTodoFromText, toggleDone } from './utils'

export function useTodos (initialTodos: Todo[]= []) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const onTodoAdd = (todoText: string) => setTodos((todos) => addTodo(todos, generateTodoFromText(todoText), 'START'))
 
  const onToggleDone = (id: string) => {
    setTodos((todos) => toggleDone(todos, id))
  }

  const onTodoUpdate = (id: string, updatedTodo: Todo) => {
    setTodos((todos) => todos.map((todo) => todo.id === id ? { ...updatedTodo, updatedAt: new Date() } : todo))
  }

  const onDelete = (id: string) => {
    setTodos((todos) => deleteTodo(todos, id))
  }

  return {
    todos,
    setTodos,
    onTodoAdd,
    onToggleDone,
    onTodoUpdate,
    onDelete,
  }
}

