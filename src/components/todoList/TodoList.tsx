import React, { useCallback, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Box, Button, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';
import { Add as AddIcon } from '@mui/icons-material';
import { TodoActions } from '../../enums/TodoEnums';
import TodoItem from '../todoItem/TodoItem';
import TodoModal from '../todoModal/TodoModal';
import EmptyTodoList from '../emptyTodoList/EmptyTodoList';
import useTodos from '../../hooks/todosHook';
import { modalType } from './types';

const TodoList = () => {
  const { addToast } = useToasts();

  const [modal, setModal] = useState<modalType>({ show: false });
  const [state, dispatch] = useTodos();

  const addTodo = useCallback((text: string) => {
    dispatch({ type: TodoActions.ADD, payload: text });
    addToast('Todo created successfully!', { appearance: 'success', autoDismiss: true });
  }, [addToast, dispatch]);

  const editTodoText = (id: string, text: string) => {
    setModal({ show: true, payload: { id, text } });
  }

  const updateTodoText = useCallback((id: string, text: string) => {
    dispatch({ type: TodoActions.UPDATE, payload: {id, text} });
    addToast('Todo updated successfully!', { appearance: 'success', autoDismiss: true });
  }, [addToast, dispatch]);

  const toggleTodo = useCallback((id: string) => {
    dispatch({ type: TodoActions.PATCH, payload: id });
    addToast('Todo updated successfully!', { appearance: 'success', autoDismiss: true });
  }, [addToast, dispatch]);

  const deleteTodo = useCallback((id: string) => {
    dispatch({ type: TodoActions.DELETE, payload: id });
    addToast('Todo deleted successfully!', { appearance: 'error', autoDismiss: true });
  }, [addToast, dispatch]);

  return (
    <Box marginTop={8} sx={{ width: '100%' }}>
      <Box textAlign='right'>
        <Tooltip title="Create a Todo" placement='top'>
          <Button
          variant="contained"
          startIcon={<AddIcon/>}
          size='large'
          sx={{ marginBottom: '2em', alignSelf: 'right' }}
          onClick={() => setModal({ show: true })}
          >Create Todo</Button>
        </Tooltip>
        <TodoModal open={modal.show} onClose={() => setModal({ show: false })} onAddTodo={addTodo} todo={modal?.payload} onUpdateTodo={updateTodoText}></TodoModal>
      </Box>
      <Stack spacing={2}>
        {state.todos.length > 0 ? state.todos.map((todo) => {
          return (<TodoItem todo={todo} key={todo.id} data-testid={`todo_${todo.id}`} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} onEditTodo={editTodoText}></TodoItem>)
        }) : <EmptyTodoList/>}
      </Stack>
    </Box>
  )
}

export default TodoList;