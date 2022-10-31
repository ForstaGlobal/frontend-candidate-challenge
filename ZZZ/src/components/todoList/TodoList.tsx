import { styled } from '@mui/material'
import React from 'react'
import { Todo } from '../../types'
import TodoItem from '../todoItem/TodoItem'
import { ListProps } from './types'

const VerticalList = styled('ul')(() => ({
  overflow: 'scroll',
}))
export const TodoList = (props: ListProps) => {
  const { todos, onToggleDone, onDelete, onTodoUpdate } = props

  return (
    <VerticalList className='todoList'>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            onToggleDone={onToggleDone}
            onDelete={onDelete}
            onTodoUpdate={onTodoUpdate}
          />
        </li>
      ))}
    </VerticalList>
  )
}
