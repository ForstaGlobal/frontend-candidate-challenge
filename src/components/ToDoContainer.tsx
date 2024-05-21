import React from 'react';
import { Container, Typography,Box } from '@mui/material';
import AddTask from './AddTask';
import TodoList from './TodoList';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
const ToDoContainer: React.FC = () => {
  return (
   
    <Container maxWidth="sm" className="todo-container" sx={{ background: "#fff" ,  borderRadius: "1rem", marginTop: "3vh",
    padding: "4rem",  minWidth: "60vw",
  }} >
    <Box sx={{display:'flex',justifyItems:'center'}}>
    <CheckCircleOutlineRoundedIcon sx={{ color: "linear-gradient(0.125turn, #e66465, #ff00ff)",marginRight:'1rem',fontSize:'40px'}}/>
      <Typography     sx={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "1rem" ,color:'#ff00ff'}}>
 ToDo App      </Typography>
 </Box>
 
      <AddTask />
      <TodoList />
    </Container>
  );
};

export default ToDoContainer;
