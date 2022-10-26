import React from 'react'
import { Todo } from '../../types'
import TodoItem from '../todoItem/TodoItem'
import { ListProps } from './types'

export const TodoList = (props: ListProps) => {
  const { todos, onToggleDone, onDelete, onTodoUpdate } = props

  return (
    <ul className='todoList'>
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
    </ul>
  )
}
