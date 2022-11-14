import React, { useCallback, useReducer, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Box, Button, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';
import { Add as AddIcon } from '@mui/icons-material';
import { TodoActions } from '../../enums/TodoEnums';
import TodoItem from '../todoItem/TodoItem';
import TodoModal from '../todoModal/TodoModal';
import EmptyTodoList from '../emptyTodoList/EmptyTodoList';
import useTodos from '../../hooks/todosHook';
import { getInitialTodos } from '../../service/todoService';

const TodoList = () => {
  const { addToast } = useToasts();
  const initialState = {
    todos: getInitialTodos()
  };
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(useTodos, initialState);

  const addTodo = useCallback((text: string) => {
    dispatch({ type: TodoActions.ADD, payload: text });
    addToast('Todo created successfully!', { appearance: 'success', autoDismiss: true });
  }, [addToast]);

  const updatedTodo = useCallback((id: string) => {
    dispatch({ type: TodoActions.UPDATE, payload: id });
    addToast('Todo updated successfully!', { appearance: 'success', autoDismiss: true });
  }, [addToast]);

  const deleteTodo = useCallback((id: string) => {
    dispatch({ type: TodoActions.DELETE, payload: id });
    addToast('Todo deleted successfully!', { appearance: 'error', autoDismiss: true });
  }, [addToast]);

  return (
    <Box marginTop={8} sx={{ width: '100%' }}>
      <Box textAlign='right'>
        <Tooltip title="Create a Todo" placement='top'>
          <Button
          variant="contained"
          startIcon={<AddIcon/>}
          size='large'
          sx={{ marginBottom: '2em', alignSelf: 'right' }}
          onClick={() => setShowModal(true)}
          >Create Todo</Button>
        </Tooltip>
        <TodoModal open={showModal} onClose={() => setShowModal(false)} onAddTodo={addTodo}></TodoModal>
      </Box>
      <Stack spacing={2}>
        {state.todos.length > 0 ? state.todos.map((todo) => {
          return (<TodoItem todo={todo} key={todo.id} data-testid={`todo_${todo.id}`} onDeleteTodo={deleteTodo} onUpdateTodo={updatedTodo}></TodoItem>)
        }) : <EmptyTodoList/>}
      </Stack>
    </Box>
  )
}

export default TodoList;