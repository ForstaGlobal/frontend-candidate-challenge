import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import AddTask from './AddTask';
import TodoList from './TodoList';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import useTodoStore from '../store/useTodoStore';
import ToggleButtons from './ToggleButtons';

const ToDoContainer = () => {
  const addTodoItem = useTodoStore((state) => state.addTodoItem);
  const [filter, setFilter] = useState('all');

  return (
    <Container maxWidth="sm" className="todo-container" sx={{ background: 'background.paper', borderRadius: '1rem', marginTop: '3vh', padding: '4rem', minWidth: '60vw' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <CheckCircleOutlineRoundedIcon sx={{ marginRight: '1rem', fontSize: '40px', color: 'primary.main' }} />
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 500, color: 'primary.main' }}>
          ToDo App
        </Typography>
      </Box>
      <AddTask addTodoItem={addTodoItem} />
      <ToggleButtons setFilter={setFilter} />
      <TodoList filter={filter} />
    </Container>
  );
};

export default ToDoContainer;
