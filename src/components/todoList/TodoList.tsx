import React from 'react'
import { Todo } from '../../types'
import TodoItem from '../todoItem/TodoItem'
import { ListProps } from './types'

export const TodoList = (props: ListProps) => {
  const { todos, onToggleDone, onDelete } = props

  return (
    <ul className='todoList'>
      {todos.map((todo: Todo, i) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            onToggleDone={onToggleDone}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  )
}
