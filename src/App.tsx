import React, { useState } from 'react'
import ShowAddtodoForm from './components/showAddtodoForm/ShowAddtodoForm'

import { TodoList } from './components/todoList/TodoList'
import Dialog from './components/dialog/Dialog'

import './styles.scss'
import { Todo } from './types'
import { addTodo, deleteTodo, generateTodoFromText, toggleDone } from './utils'
import NewTodoForm from './components/newTodoForm/NewTodoForm'
import { getInitialTodos } from './getInitialTodos'
import { Grid, styled } from '@mui/material'

export default function App () {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos)

  const [formDialogShown, setFormDialogShown] = useState<boolean>(false)

  const onTodoAdd = (todoText: string) => setTodos((todos) => addTodo(todos, generateTodoFromText(todoText), 'START'))

  const showForm = () => setFormDialogShown(true)

  const onToggleDone = (id: string) => {
    setTodos((todos) => toggleDone(todos, id))
  }

  const onTodoUpdate = (id: string, updatedTodo: Todo) => {
    setTodos((todos) => todos.map((todo) => todo.id === id ? { ...updatedTodo, updatedAt: new Date() } : todo))
  }

  const onDelete = (id: string) => {
    setTodos((todos) => deleteTodo(todos, id))
  }

  const TodoSection = styled(Grid)(({
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
  }))

  return (
    <div className='todoListApp'>
      <div className='forsta-logo' />
      <TodoSection>
        <ShowAddtodoForm onClick={showForm} />
        <TodoList
          todos={todos}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
          onTodoUpdate={onTodoUpdate}
        />
      </TodoSection>
      <Dialog
        isOpen={formDialogShown}
        handleClose={() => setFormDialogShown(false)}
      >
        <NewTodoForm
          onAdd={onTodoAdd}
        />
      </Dialog>
    </div>
  )
}
