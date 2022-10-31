import { useState } from 'react'
import ShowAddtodoForm from './components/showAddtodoForm/ShowAddtodoForm'

import { TodoList } from './components/todoList/TodoList'
import Dialog from './components/dialog/Dialog'

import './styles.scss'
import NewTodoForm from './components/newTodoForm/NewTodoForm'
import { getInitialTodos } from './getInitialTodos'
import { Box, Grid, styled } from '@mui/material'
import { useTodos } from './todoHooks/todosHook'
import React from 'react'
import UndoRedo from './components/undoRedo/UndoRedo'

const TodoSection = styled(Grid)(({
  display: 'flex',
  flexDirection: 'column',
  width: '250px',
  maxHeight: '80vh',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  position: 'relative',
}))

const TodoListHead = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'sticky',
  paddingBottom: '10px',
  top: 0,
  backgroundColor: 'rgb(232, 234, 236)',
}))

export default function App () {
  const [formDialogShown, setFormDialogShown] = useState<boolean>(false)

  const {
    todos,
    onTodoAdd,
    onToggleDone,
    onTodoUpdate,
    onDelete,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useTodos(getInitialTodos())

  const showForm = () => setFormDialogShown(true)

  return (
    <div className='todoListApp'>
      <div className='forsta-logo' />
      <TodoSection>
        <TodoListHead>
          <UndoRedo
            canUndo={canUndo}
            undo={undo}
            canRedo={canRedo}
            redo={redo}
          />
          <ShowAddtodoForm onClick={showForm} />
        </TodoListHead>
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
