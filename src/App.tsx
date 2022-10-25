import React, { useState } from 'react'
import ShowAddtodoForm from './components/showAddtodoForm/ShowAddtodoForm'

import { TodoList } from './components/todoList/TodoList'
import Dialog from './components/dialog/Dialog'

import './styles.scss'
import { Todo } from './types'
import { addTodo, deleteTodo, generateTodoFromText, toggleDone } from './utils'
import NewTodoForm from './components/newTodoForm/NewTodoForm'

export default function App () {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '123', text: 'Buy milk', done: true, createdAt: new Date('2022-9-09') },
    { id: '456', text: 'Buy bread', done: false, createdAt: new Date('2022-9-10') },
  ])

  const [formDialogShown, setFormDialogShown] = useState<boolean>(false)

  const onTodoAdd = (todoText: string) => setTodos((todos) => addTodo(todos, generateTodoFromText(todoText), 'START'))

  const showForm = () => setFormDialogShown(true)

  const onToggleDone = (id: string) => {
    setTodos((todos) => toggleDone(todos, id))
  }
  
  const onDelete = (id: string) => {
    setTodos((todos) => deleteTodo(todos, id))
  }

  return (
    <div className='todoListApp'>
      <div className='forsta-logo' />
      <ShowAddtodoForm onClick={showForm} />
      <TodoList
        todos={todos}
        onToggleDone={onToggleDone}
        onDelete={onDelete}
      />
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
