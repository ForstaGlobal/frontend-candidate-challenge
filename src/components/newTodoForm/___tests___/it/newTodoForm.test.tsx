import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react'
import NewTodoForm from '../../NewTodoForm';

describe('NewTodoForm', () => {
  it('can type into Todo form', () => {
    const onAdd = jest.fn()

    render(<NewTodoForm
      onAdd={onAdd}
    />)
    fireEvent.change(screen.getByTestId('new-todo-form'), {
      target: {value: 'todo test'}
    })
    expect(screen.getByDisplayValue('todo test')).toBeInTheDocument()
  })
  it('can not add Todo without text', () => {
    const onAdd = jest.fn()

    render(<NewTodoForm
      onAdd={onAdd}
    />)
    expect(screen.getByTestId('new-todo-form-submit')).toBeDisabled()
  })
  it('can add new Todo form', () => {
    const onAdd = jest.fn()

    render(<NewTodoForm
      onAdd={onAdd}
    />)
    fireEvent.change(screen.getByTestId('new-todo-form'), {
      target: {value: 'todo test'}
    })

    expect(screen.getByTestId('new-todo-form-submit')).toBeEnabled()

    fireEvent.click(screen.getByTestId('new-todo-form-submit'))
    expect(onAdd).toBeCalled()
  })
})
