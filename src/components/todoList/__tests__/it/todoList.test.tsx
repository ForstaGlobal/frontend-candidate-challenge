import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { TodoList } from '../../TodoList'
import { fakeTodos } from '../fakeTodos'

describe('TodoList', () => {
  it('renders Todo list component', () => {
    const onToggleDone = jest.fn()
    const onDelete = jest.fn()
    const onTodoUpdate = jest.fn()

    render(<TodoList
      todos={fakeTodos}
      onDelete={onDelete}
      onToggleDone={onToggleDone}
      onTodoUpdate={onTodoUpdate}
    />)
    expect(screen.getByTestId(`todo_item_${fakeTodos[0].id}`)).toBeInTheDocument()
    expect(screen.getByTestId(`todo_item_${fakeTodos[1].id}`)).toBeInTheDocument()
    expect(screen.getByTestId(`todo_item_${fakeTodos[2].id}`)).toBeInTheDocument()

    expect(screen.getByDisplayValue(fakeTodos[0].text)).toBeInTheDocument()
    expect(screen.getByDisplayValue(fakeTodos[1].text)).toBeInTheDocument()
    expect(screen.getByDisplayValue(fakeTodos[2].text)).toBeInTheDocument()
  })

  it('can check TodoItem as completed', () => {
    const onToggleDone = jest.fn()
    const onDelete = jest.fn()
    const onTodoUpdate = jest.fn()

    const { rerender } = render(<TodoList
      todos={fakeTodos}
      onDelete={onDelete}
      onToggleDone={onToggleDone}
      onTodoUpdate={onTodoUpdate}
    />)

    expect(screen.getByTestId(`todo_item_${fakeTodos[0].id}_done_no`)).toBeInTheDocument()
    userEvent.click(screen.getByTestId(`todo_item_${fakeTodos[0].id}_done`))
    expect(onToggleDone).toBeCalledTimes(1)
    
    rerender(
      <TodoList
        todos={[{...fakeTodos[0], done: !fakeTodos[0].done}].concat(fakeTodos.slice(1))}
        onDelete={onDelete}
        onToggleDone={onToggleDone}
        onTodoUpdate={onTodoUpdate}
      />)

    expect(screen.getByTestId(`todo_item_${fakeTodos[0].id}_done_yes`)).toBeInTheDocument()
    expect(screen.queryByTestId(`todo_item_${fakeTodos[0].id}_done_no`)).not.toBeInTheDocument()
  })

  it('can delete TodoItem', () => {
    const onToggleDone = jest.fn()
    const onDelete = jest.fn()
    const onTodoUpdate = jest.fn()

    const { rerender } = render(<TodoList
      todos={fakeTodos}
      onDelete={onDelete}
      onToggleDone={onToggleDone}
      onTodoUpdate={onTodoUpdate}
    />)

    expect(screen.getByTestId(`todo_item_${fakeTodos[0].id}_delete`)).toBeInTheDocument()
    userEvent.click(screen.getByTestId(`todo_item_${fakeTodos[0].id}_delete`))
    expect(onDelete).toBeCalledTimes(1)

    rerender(
      <TodoList
      todos={fakeTodos.slice(1)}
      onDelete={onDelete}
      onToggleDone={onToggleDone}
      onTodoUpdate={onTodoUpdate}
    />)

    expect(screen.queryByTestId(`todo_item_${fakeTodos[0].id}`)).not.toBeInTheDocument()
  })
})