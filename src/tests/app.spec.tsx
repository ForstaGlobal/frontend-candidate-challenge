
import App from '../App'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getInitialTodos } from '../getInitialTodos'
import { Todo } from '../types'
import React from 'react'

// Test app functionality: Create, edit, delete, mark as done.
describe('TodoApp', () => {
  const todos: Todo[] = getInitialTodos()

  it('renders app', () => {
    const view = render(<App />)
    expect(view).not.toBeUndefined()
  })

  it('user sees todo items', () => {
    render(<App />)

    todos.forEach((todo) => expect(screen.getByDisplayValue(todo.text)).toBeDefined())
  })

  it('user can add new todo', () => {
    render(<App />)
    userEvent.click(screen.getByTestId('open-new-todo-form'))

    expect(screen.getByTestId('new-todo-form-submit')).toBeDefined()
    expect(screen.getByTestId('new-todo-form')).toBeDefined()
    expect(screen.getByTestId('new-todo-form-submit')).toBeDisabled()

    expect(screen.getByTestId('new-todo-form-submit')).toBeDisabled()
    userEvent.type(screen.getByTestId('new-todo-form'), 'todo test')
    expect(screen.getByTestId('new-todo-form-submit')).toBeEnabled()

    userEvent.click(screen.getByTestId('new-todo-form-submit'))
    userEvent.click(screen.getByTestId('close-dialog-icon'))

    expect(screen.getByDisplayValue('todo test')).toBeDefined()
  })

  it('user can toggle todo done', () => {
    render(<App />)

    const todoToTogle: Todo = todos[1]
    expect(screen.getByTestId(`todo_item_${todoToTogle.id}`)).toBeDefined()
    expect(screen.getByTestId(`todo_item_${todoToTogle.id}_done_no`)).toBeInTheDocument()
    expect(screen.queryByTestId(`todo_item_${todoToTogle.id}_done_yes`)).not.toBeInTheDocument()

    userEvent.click(screen.getByTestId(`todo_item_222_done_no`))

    expect(screen.queryByTestId(`todo_item_${todoToTogle.id}_done_no`)).not.toBeInTheDocument()
    expect(screen.getByTestId(`todo_item_${todoToTogle.id}_done_yes`)).toBeInTheDocument()
  })

  it('user can edit todo text', () => {
    render(<App />)

    const todoToDelete = todos[1]
    expect(screen.getByTestId(`todo_item_${todoToDelete.id}_input`)).toHaveDisplayValue(todoToDelete.text)

    userEvent.type(screen.getByTestId(`todo_item_${todoToDelete.id}_input`), '{Backspace>9}replace todo text')
    expect(screen.getByTestId(`todo_item_${todoToDelete.id}_input`)).toHaveValue('replace todo text')
  })

  it('user can delete todo', async () => {
    render(<App />)

    todos.forEach((todo) => expect(screen.getByDisplayValue(todo.text)).toBeInTheDocument())

    const todoToDelete = todos[0]

    await screen.findByTestId(`todo_item_${todoToDelete.id}_delete`)

    userEvent.click(screen.getByTestId(`todo_item_${todoToDelete.id}_delete`))

    expect(screen.queryByTestId(`todo_item_${todoToDelete.id}_delete`)).not.toBeInTheDocument()

    const todosLeft: Todo[] = todos.slice(1)
  
    todosLeft.forEach(async(todo) => {
      fireEvent.mouseOver(screen.getByTestId(`todo_item_${todo.id}`))
      await screen.findByTestId(`todo_item_${todo.id}_delete`)
      userEvent.click(screen.getByTestId(`todo_item_${todo.id}_delete`))
    })
    todosLeft.forEach(async (todo) => await waitFor(() => expect(screen.queryByDisplayValue(todo.text)).not.toBeInTheDocument()))

  })
})
