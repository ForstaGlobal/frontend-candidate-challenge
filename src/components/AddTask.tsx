import React, { useState } from 'react';
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

interface AddTaskProps {
  addTodoItem: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const handleTodoSubmit = () => {
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    }
  };

  return (
    <Box>
      <FormControl variant="outlined" fullWidth>
        <OutlinedInput
          type="text"
          size="small"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleTodoSubmit();
            }
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Add todo" edge="end" onClick={handleTodoSubmit} sx={{ background: 'linear-gradient(0.125turn, #ff7f50, #ff00ff)'}}>
                <AddCircleRoundedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default AddTask;
