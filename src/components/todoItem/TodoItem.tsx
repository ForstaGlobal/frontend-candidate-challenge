import React from 'react'
import { Checkbox, Box, Tooltip, IconButton, Grid, Slide } from '@mui/material';
import { Clear } from '@mui/icons-material';
import { Props } from './types';
import { TodoStatus } from '../../enums/TodoEnums';

const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo }: Props) => {

  const todoStatusTitle = (todo.status === TodoStatus.PENDING) ? 'Mark as Completed' : 'Mark as Pending';

  const handleTodoStatusChange = () => {
    onUpdateTodo(todo.id);
  }

  const handleTodoDelete = () => {
    onDeleteTodo(todo.id)
  }

  const isTodoCompleted = (todo.status === TodoStatus.COMPLETED);

  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box
      borderRadius='10px'
      minHeight='80px'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      padding='.5em 1.5em'
      bgcolor={isTodoCompleted ? 'success.main' : 'secondary.main'}
      >
        <Grid container spacing={0}>
          <Grid item xs={11}>
            <Tooltip title={todoStatusTitle} placement='top'>
              <Checkbox checked={isTodoCompleted} color='default' onChange={handleTodoStatusChange} data-testid={`toggle_todo_${todo.id}`}></Checkbox>
            </Tooltip>
            <span>{todo.text}</span>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title="Delete a Todo" placement='top'>
              <IconButton
                color='error'
                aria-label='Delete a Todo'
                size='large'
                sx={{ float: 'right' }}
                data-testid={`delete_todo_${todo.id}`}
                onClick={handleTodoDelete}>
                <Clear />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Slide>
  )
}

export default TodoItem