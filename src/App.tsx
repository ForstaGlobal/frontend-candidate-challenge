import { useState } from 'react'
import ShowAddtodoForm from './components/showAddtodoForm/ShowAddtodoForm'

import { TodoList } from './components/todoList/TodoList'
import Dialog from './components/dialog/Dialog'

import './styles.scss'
import NewTodoForm from './components/newTodoForm/NewTodoForm'
import { getInitialTodos } from './getInitialTodos'
import { Grid, styled } from '@mui/material'
import { useTodos } from './todoHooks/todosHook'

export default function App () {
  const [formDialogShown, setFormDialogShown] = useState<boolean>(false)

  const {
    todos,
    onTodoAdd,
    onToggleDone,
    onTodoUpdate,
    onDelete
  } = useTodos(getInitialTodos())

  const showForm = () => setFormDialogShown(true)

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
