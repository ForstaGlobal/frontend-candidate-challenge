import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Todo } from "../../../../types"
import TodoItem from "../../TodoItem"

describe('TodoItem', () => {
  it('renders TodoItem component', () => {
    const createdAt = new Date()
    const todo: Todo = {
      text: 'test todo',
      id: '12',
      done: false,
      createdAt
    }
    const onToggleDone = jest.fn()
    const onDelete = jest.fn()

    render(<TodoItem
      todo={todo}
      onDelete={onDelete}
      onToggleDone={onToggleDone}
    />)
    expect(screen.getByTestId(`todo_item_${todo.id}`)).toBeInTheDocument()
  })
  it('can check TodoItem as completed', () => {
    const createdAt = new Date()
    const todo: Todo = {
      text: 'test todo',
      id: '12',
      done: false,
      createdAt
    }
    const onToggleDone = jest.fn()
    const onDelete = jest.fn()

    const { rerender } = render(<TodoItem
      todo={todo}
      onDelete={onDelete}
      onToggleDone={onToggleDone}
    />)

    expect(screen.getByTestId(`todo_item_${todo.id}_done_no`)).toBeInTheDocument()
    userEvent.click(screen.getByTestId(`todo_item_${todo.id}_done`))
    expect(onToggleDone).toBeCalledTimes(1)

    rerender(
      <TodoItem
      todo={{...todo, done: !todo.done}}
      onDelete={onDelete}
      onToggleDone={onToggleDone}
    />)

    expect(screen.getByTestId(`todo_item_${todo.id}_done_yes`)).toBeInTheDocument()
    expect(screen.queryByTestId(`todo_item_${todo.id}_done_no`)).not.toBeInTheDocument()
  })
})